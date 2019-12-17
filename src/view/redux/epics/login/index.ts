
import { ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { exhaustMap, switchMap, mergeMap, filter, mapTo } from 'rxjs/operators';


import { LOGIN, loginSuccess } from '../../actions/login';

export const loginEpic = (action$: any) => {
    return action$.pipe(
        ofType(LOGIN),
        mergeMap((action): any => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => console.log(json))
        })
    );
}
