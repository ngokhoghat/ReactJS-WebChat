import { combineReducers } from "redux";
import { authReducers } from "./auth"
import { userReducers } from "./user"
import { testEpic } from './ping/index'
import { firebaseReducer } from 'react-redux-firebase'


export const appReducer = combineReducers({
    authReducers,
    userReducers
});

export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

