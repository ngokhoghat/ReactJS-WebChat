
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import app from '../../../firebase';

import { LOGIN, loginSuccess, loginFalse } from '../../actions/login';
import { getUser, getUserFriendList } from '../../actions/user';

export const loginEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(LOGIN),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                const { u_name, u_pass } = action.payload;
                app.auth().signInWithEmailAndPassword(u_name, u_pass)
                    .then((res: any) => {
                        obs.next(loginSuccess(res));
                        obs.next(getUser(res.user.uid));
                        obs.next(getUserFriendList(res.user.uid));
                        obs.complete();
                    })
                    .catch(function (error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        obs.next(loginFalse(error))
                        obs.complete();
                    });
            })
        })
    );
}