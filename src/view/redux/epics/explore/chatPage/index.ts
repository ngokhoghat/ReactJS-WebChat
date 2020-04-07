import { ofType, combineEpics } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { exhaustMap, switchMap } from 'rxjs/operators';

import firebase from '../../../../firebase'
import {
    GET_USER,
    SET_ONLINE,
    GET_MESSAGE,
    GET_USER_FRIEND_LIST,
    getUserFaild,
    getUserSuccess,
    getUserFriendListSuccess,
    getUserFriendListFaild,
    getMessageSuccess,
    getMessageFaild,
    setOnlineSuccess,
    setOnlineFaild,
    getMessage,
    getUserFriendList
} from '../../../actions/explore/homePage';

export const getUserEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(GET_USER),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                const userId = action.payload;
                const db = firebase.firestore();
                db.collection("users").where("id", "==", userId).get()
                    .then(doc => {
                        const user: any = [];
                        doc.forEach(res => user.push(res.data()))
                        obs.next(getUserSuccess(user[0]));
                        obs.next(getUserFriendList(user[0].id))
                        obs.next(getMessage(user[0].message_id))
                        obs.complete()
                    }).catch(error => {
                        obs.next(getUserFaild(error));
                        obs.complete()
                    })
            })
        })
    );
}


export const getUserFriendListEpics = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(GET_USER_FRIEND_LIST),
        switchMap((action: any) => {
            return new Observable((obs) => {
                const db = firebase.firestore();
                db.collection("friends").where("id", "==", action.payload).get()
                    .then((doc) => {
                        let friendsList: any = [];
                        doc.forEach((item) => { friendsList.push(item.data()) })
                        db.collection('users').where("id", "in", friendsList[0]['friend-list']).onSnapshot((res: any) => {
                            friendsList = [];
                            res.forEach((doc: any) => { friendsList.push(doc.data()) })
                            obs.next(getUserFriendListSuccess(friendsList))
                        });
                    }).catch(error => {
                        obs.next(getUserFriendListFaild(error));
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
                const db = firebase.firestore();
                db.collection("messages").where("id", "in", action.payload).get().then((doc) => {
                    const oldMessage: any = [];
                    doc.forEach(element => { oldMessage.push(element.data()) });
                    obs.next(getMessageSuccess(oldMessage))
                    obs.complete();
                }).catch(error => {
                    obs.next(getMessageFaild(error));
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
                const db = firebase.firestore();
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



export const homePageEpic = combineEpics(
    getUserEpic,
    getUserFriendListEpics,
    getMessageEpics
)