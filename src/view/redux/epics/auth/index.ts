
import { ofType, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import firebase from '../../../firebase';

import { LOGIN, loginSuccess, loginFalse, SIGN_UP, signUpSuccess, signUpFalse, getCurrentUser, GET_CURRENT_USER } from '../../actions/auth';
import { getUser, getUserFriendList, setOnline } from '../../actions/user';

export const onAuthStateChanged = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(GET_CURRENT_USER),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                firebase.auth().onAuthStateChanged(res => {
                    console.log("NGOC",res);
                    
                    // obs.next(getCurrentUser(res))
                })
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
                        console.log("NGOCDINH", res);
                        
                        // obs.next(setOnline(res.user.uid));
                        // obs.next(getUser(res.user.uid));
                        // obs.next(loginSuccess(res));
                        // obs.complete();
                    })
                    .catch(function (error) {
                        // obs.next(loginFalse(error))
                        // obs.complete();
                    });
            })
        })
    );
}

// export const signUpEpic = (action$: any, state$: any) => {
//     return action$.pipe(
//         ofType(SIGN_UP),
//         exhaustMap((action: any) => {
//             return new Observable((obs) => {
//                 const db = app.firestore();
//                 const { u_name, u_pass, u_mail } = action.payload;
//                 app.auth().createUserWithEmailAndPassword(u_mail, u_pass)
//                     .then((result: any) => {
//                         db.collection("users").doc(result.user.uid).set({
//                             name: u_name,
//                             email: u_mail,
//                             img: null,
//                             phone: null,
//                             id: result.user.uid
//                         }).then(res => {
//                             app.database().ref('users/' + result.user.uid).set({
//                                 img: "empty",
//                                 name: u_name,
//                                 status: 1
//                             }).then(res => {
//                                 obs.next(signUpSuccess(res));
//                                 obs.next(getUser(result.user.uid));
//                                 obs.complete();
//                             })
//                         }).catch();
//                     })
//                     .catch(function (error) {
//                         obs.next(signUpFalse(error))
//                         obs.complete();
//                     });
//             })
//         })
//     );
// }

export const authEpic = combineEpics(
    onAuthStateChanged,
    loginEpic,
    // signUpEpic
)