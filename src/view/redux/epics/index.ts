import { combineEpics } from "redux-observable";

import { authEpic } from "./auth";
import { userEpics } from "./user";




export const rootEpic = combineEpics(
    authEpic,
    userEpics,
);
