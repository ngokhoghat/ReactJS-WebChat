import { combineEpics } from "redux-observable";
import { loginEpic } from "./login";
import { pingEpic } from "./ping";




export const rootEpic = combineEpics(
    loginEpic,
    pingEpic,
);
