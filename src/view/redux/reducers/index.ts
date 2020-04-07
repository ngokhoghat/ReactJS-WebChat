import { combineReducers } from "redux";
import { authReducers } from "./auth"
import { homeReducer } from "./explore/homePage"
import { chatReducer } from "./explore/chatPage"

export const appReducer = combineReducers({
    authReducers,
    homeReducer,
    chatReducer
});

export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

