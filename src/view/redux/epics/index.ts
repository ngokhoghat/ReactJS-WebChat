import { combineEpics } from "redux-observable";

import { authEpic } from "./auth";
import { homePageEpic } from "./explore/homePage";
import { chatPageEpic } from "./explore/chatPage";




export const rootEpic = combineEpics(
    authEpic,
    homePageEpic,
    chatPageEpic
);
