
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import app from '../../../firebase';

import { GET_USER, getUserSuccess, getUserFaild } from '../../actions/user';

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