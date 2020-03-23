
import { ofType } from 'redux-observable';
import { Observable, of, interval } from 'rxjs';
import { exhaustMap, switchMap, mergeMap, filter, mapTo, take } from 'rxjs/operators';

import { LOGIN, loginSuccess, loginFalse } from '../../actions/login';
import { firebaseFirestore } from '../../../firebase/database/fireStore';
import { FireBaseAut } from '../../../firebase/database/FireBaseAut';

export const loginEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(LOGIN),
        switchMap((action: any) => {
            return new Observable((obs) => {
                setTimeout(() => {
                    obs.next(loginSuccess("snapshot"));
                }, 1000);
                // const FireBase = new FireBaseAut;
                // FireBase.create(action.payload);
                // const { u_name, u_pass } = action.payload;
                // const db = firebaseFirestore();
                // db.collection('users').where("name", '==', `${u_name}`).get().then(snapshot => {
                //     if (snapshot.empty) {
                //         obs.next(loginFalse("Error"));
                //         obs.complete();
                //         return;
                //     } else {
                //         snapshot.forEach(doc => {
                //             console.log(doc.id, '=>', doc.data());
                //         });
                //         obs.complete();
                //     }

                // }).catch(err => {
                //     obs.next(loginFalse(err));
                //     obs.complete();
                //     // console.log('Error getting documents', err);
                // });

            })
        })
    );
}
// export const pingEpic = (action$: any) => {
//     return action$.pipe(
//         ofType(PING),
//         switchMap((action: any) => {
//             return new Observable(obs => {
//                 console.log("Hello");
//                 setTimeout(() => {
//                     obs.next(pong());
//                 }, 1000);
//             })
//         })
//         // delay(2000),
//         // mapTo(getPing())
//     )
// };