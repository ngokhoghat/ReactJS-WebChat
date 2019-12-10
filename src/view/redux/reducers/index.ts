import { combineReducers } from "redux";
import { loginPageReducer } from "./login/index"


export const appReducer = combineReducers({
    loginPageReducer
});

export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

