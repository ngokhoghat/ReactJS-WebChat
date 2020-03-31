
import { ofType, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import app from '../../../firebase';

import {
    getUserSuccess,
    getUserFaild,
    GET_USER,
    GET_USER_FRIEND_LIST,
    getUserFriendListSuccess,
    SET_ONLINE,
    setOnlineSuccess,
    setOnlineFaild,
    GET_MESSAGE,
    getMessageSuccess
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

export const setOnlineEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(SET_ONLINE),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                const db = app.firestore();
                db.collection("users").doc(action.payload).update({ status: 1 })
                    .then(res => {
                        obs.next(setOnlineSuccess({}))
                        obs.complete()
                    })
                    .catch(error => {
                        obs.next(setOnlineFaild({}))
                        obs.complete()
                    })
            })
        })
    );
}

// export const setOfflineEpic = (action$: any, state$: any) => {
//     return action$.pipe(
//         ofType(SET_ONLINE),
//         exhaustMap((action: any) => {
//             return new Observable((obs) => {
//                 const db = app.firestore();
//                 db.collection("users").doc(action.payload).update({ status: 1 })
//                     .then(res => {
//                         obs.next(setOnlineSuccess({}))
//                         obs.complete()
//                     })
//                     .catch(error => {
//                         obs.next(setOnlineFaild({}))
//                         obs.complete()
//                     })
//             })
//         })
//     );
// }


export const getUserFriendListEpics = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(GET_USER_FRIEND_LIST),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                const db = app.firestore();
                let friendsList: any = [];
                db.collection("friends").doc(action.payload).get().then((doc) => {
                    friendsList = doc.data();
                    db.collection('users').where("id", "in", friendsList['friend-list']).onSnapshot((res: any) => {
                        const a: any = [];
                        res.forEach((doc: any) => {
                            a.push(doc.data())
                        })
                        obs.next(getUserFriendListSuccess(a))
                    });
                }).catch(error => {
                    // obs.next(getUserFaild(error));
                    obs.complete()
                });
            })
        })
    );
}

export const getMessageEpics = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(GET_MESSAGE),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                const db = app.firestore();
                db.collection("messages").where("id", "in", action.payload).get().then((doc) => {
                    const oldMessage: any = []
                    doc.forEach(element => {
                        oldMessage.push(element.data());
                    });
                    obs.next(getMessageSuccess(oldMessage))
                    obs.complete();
                }).catch(error => {
                    // obs.next(getUserFaild(error));
                    obs.complete()
                });
            })
        })
    );
}

export const userEpics = combineEpics(
    getUserEpics,
    setOnlineEpic,
    getUserFriendListEpics,
    getMessageEpics
)