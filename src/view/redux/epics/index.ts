import { combineEpics } from "redux-observable";

import { authEpic } from "./auth";
import { getUserEpics, getUserFriendListEpics } from "./user";




export const rootEpic = combineEpics(
    authEpic,
    getUserEpics,
    getUserFriendListEpics
);
