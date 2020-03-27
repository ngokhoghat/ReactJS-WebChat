import { combineEpics } from "redux-observable";
import { loginEpic } from "./login";
import { pingEpic } from "./ping";
import { getUserEpics } from "./user";




export const rootEpic = combineEpics(
    loginEpic,
    pingEpic,
    getUserEpics
);
