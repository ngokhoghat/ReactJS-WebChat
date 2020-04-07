
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
import { clearDataUser } from '../../actions/explore/homePage';

export const onAuthStateChanged = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(GET_CURRENT_USER),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                try {
                    firebase.auth().onAuthStateChanged(res => {
                        obs.next(getCurrentUserSuccess(res))
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
                const { u_name, u_pass, u_mail } = action.payload;
                firebase.auth().createUserWithEmailAndPassword(u_mail, u_pass)
                    .then((result: any) => {
                        db.collection("users").doc().set({
                            name: u_name,
                            email: u_mail,
                            img: null,
                            phone: null,
                            id: result.user.uid
                        }).then(res => {
                            obs.next(clearDataUser());
                            obs.next(signUpSuccess(res))
                            obs.complete()
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