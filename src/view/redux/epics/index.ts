import { combineEpics } from "redux-observable";

import { authEpic } from "./auth";
import { homePageEpic } from "./explore/homePage";




export const rootEpic = combineEpics(
    authEpic,
    homePageEpic
);
