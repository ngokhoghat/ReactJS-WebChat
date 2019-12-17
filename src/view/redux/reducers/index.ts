import { combineReducers } from "redux";
import { loginPageReducer } from "./login/index"
import { testEpic } from './ping/index'


export const appReducer = combineReducers({
    loginPageReducer,
    testEpic
});

export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

