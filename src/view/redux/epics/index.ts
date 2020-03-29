import { combineEpics } from "redux-observable";
import { loginEpic } from "./login";
import { pingEpic } from "./ping";
import { getUserEpics, getUserFriendListEpics } from "./user";




export const rootEpic = combineEpics(
    loginEpic,
    pingEpic,
    getUserEpics,
    getUserFriendListEpics
);
