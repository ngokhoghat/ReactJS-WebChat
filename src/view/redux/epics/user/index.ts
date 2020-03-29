
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import app from '../../../firebase';

import {
    getUserSuccess,
    getUserFaild,
    GET_USER,
    GET_USER_FRIEND_LIST,
    getUserFriendListSuccess
} from '../../actions/user';

export const getUserEpics = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(GET_USER),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                const db = app.firestore();
                db.collection("users").doc(action.payload).get().then((doc) => {
                    obs.next(getUserSuccess(doc.data()));
                    obs.complete()
                }).catch(error => {
                    obs.next(getUserFaild(error));
                    obs.complete()
                });

            })
        })
    );
}


export const getUserFriendListEpics = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(GET_USER_FRIEND_LIST),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                const db = app.firestore();
                db.collection("friends").doc(action.payload).get().then((doc) => {
                    const friends: any = doc.data();
                    friends['friend-list'].map((item: any, index: any) => {
                        app.database().ref().child('users').child(item).on('value', snap => {
                            const user = {
                                id: item,
                                status: snap.val()
                            }
                            obs.next(getUserFriendListSuccess(user))
                        })
                    })
                    // obs.next(getUserSuccess(doc.data()));
                }).catch(error => {
                    // obs.next(getUserFaild(error));
                    // obs.complete()
                });
            })
        })
    );
}
