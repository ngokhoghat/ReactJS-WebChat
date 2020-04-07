import { ofType, combineEpics } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { exhaustMap, switchMap } from 'rxjs/operators';
import firebase from '../../../../firebase'

import { GET_MESSAGE_BY_ID, getMessageByIdSuccess, getMessageByIdFaild } from '../../../actions/explore/chatPage';

export const getMessageByIdEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(GET_MESSAGE_BY_ID),
        exhaustMap((action: any) => {
            return new Observable((obs) => {
                const roomId = action.payload;
                const db = firebase.firestore();
                try {
                    db.collection("messages").doc(roomId).collection("message").onSnapshot(res => {
                        const message: any = [];
                        res.forEach(doc => { message.push(doc.data()) })
                        obs.next(getMessageByIdSuccess(message))
                    })
                } catch (error) {
                    obs.next(getMessageByIdFaild(error));
                    obs.complete();
                }
            })
        })
    );
}


export const chatPageEpic = combineEpics(
    getMessageByIdEpic,
)