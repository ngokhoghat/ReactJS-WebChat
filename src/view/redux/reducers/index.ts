import { combineReducers } from "redux";
import { loginPageReducer } from "./login"
import { userReducers } from "./user"
import { testEpic } from './ping/index'


export const appReducer = combineReducers({
    loginPageReducer,
    testEpic,
    userReducers
});

export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

