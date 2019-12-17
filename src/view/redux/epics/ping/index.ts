import { ofType } from "redux-observable";
import { PING, pong, getPing, ping } from "../../actions/ping";
import { filter, delay, mapTo, switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs'

export const pingEpic = (action$: any) => {
    return action$.pipe(
        ofType(PING),
        switchMap((action: any) => {
            return new Observable(obs => {
                console.log("Hello");
                setTimeout(() => {
                    obs.next(pong());
                }, 1000);
            })
        })
        // delay(2000),
        // mapTo(getPing())
    )
};