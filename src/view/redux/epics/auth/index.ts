
import { ofType, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import firebase from '../../../firebase';

import {
    LOGIN,
    SIGN_UP,
    GET_CURRENT_USER,
    loginSuccess,
    loginFalse,
    signUpSuccess,
    signUpFalse,
    getCurrentUserSuccess,
    getCurrentUserFaild
} from '../../actions/auth';
import { clearDataUser, getUser } from '../../actions/explore/homePage';
import { User } from '../../model/auth';

export const onAuthStateChanged = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(GET_CURRENT_USER),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                try {
                    firebase.auth().onAuthStateChanged((res: any) => {
                        obs.next(getCurrentUserSuccess(res));
                        if (res) {
                            obs.next(getUser(res.uid));
                        }
                    })
                } catch (error) {
                    obs.next(getCurrentUserFaild(error))
                }
            })
        })
    );
}

export const loginEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(LOGIN),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                const { u_name, u_pass } = action.payload;
                firebase.auth().signInWithEmailAndPassword(u_name, u_pass)
                    .then((res: any) => {
                        obs.next(clearDataUser());
                        obs.next(loginSuccess(res));
                        obs.next(getUser(res.user.uid));
                        obs.complete();
                    })
                    .catch(function (error) {
                        obs.next(loginFalse(error))
                        obs.complete();
                    });
            })
        })
    );
}

export const signUpEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(SIGN_UP),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                const db = firebase.firestore();
                const { u_FirstName, u_Lastname, u_Email, u_Password } = action.payload;
                firebase.auth().createUserWithEmailAndPassword(u_Email, u_Password)
                    .then((result: any) => {
                        db.collection("users").doc().set({
                            displayName: u_Lastname,
                            id: result.user.uid,
                            onlineStatus: true,
                            roomChats: [],
                            userInfor: {
                                email: u_Email,
                                image: "",
                                name: `${u_FirstName} ${u_Lastname}`,
                                phone: ""
                            }
                        }).then(res => {
                            db.collection("friends").doc().set({
                                id: result.user.uid,
                                friendList: []
                            }).then(() => {
                                obs.next(clearDataUser());
                                obs.next(signUpSuccess(result.user.uid));
                                obs.complete()
                            }).catch(error => {
                                obs.next(signUpFalse(error))
                                obs.complete();
                            });
                        }).catch(error => {
                            obs.next(signUpFalse(error))
                            obs.complete();
                        });
                    })
                    .catch(function (error) {
                        obs.next(signUpFalse(error))
                        obs.complete();
                    });
            })
        })
    );
}

export const authEpic = combineEpics(
    onAuthStateChanged,
    loginEpic,
    signUpEpic
)