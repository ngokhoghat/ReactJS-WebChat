import { combineReducers } from "redux";
import { loginPageReducer } from "./login"
import { userReducers } from "./user"
import { testEpic } from './ping/index'
import { firebaseReducer } from 'react-redux-firebase'


export const appReducer = combineReducers({
    firebaseReducer,
    loginPageReducer,
    testEpic,
    userReducers
});

export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

