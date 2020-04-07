import { combineReducers } from "redux";
import { authReducers } from "./auth"
import { homeReducer } from "./explore/homePage"

export const appReducer = combineReducers({
    authReducers,
    homeReducer
});

export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

