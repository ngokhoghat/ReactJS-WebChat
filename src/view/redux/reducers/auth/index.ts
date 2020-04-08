import { combineReducers } from "redux"
import { IAction } from "../../../shared/interfaces/common";
import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FALSE,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FALSE,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAILD
} from "../../actions/auth";


const initialState = {
    isLoading: false,
    error: {},
    currentUser: null,
    userID: null
}


export function authReducers(state: any = initialState, action: IAction<any>) {
    switch (action.type) {
        case GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                userID: action.payload && action.payload.user && action.payload.user.uid ? action.payload.user.uid : null
            };
        case GET_CURRENT_USER_FAILD:
            return {
                ...state,
                error: {
                    ...state.error,
                    currentUser: action.payload
                }
            };
        case LOGIN:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: {},
                userID: action.payload.user.uid
            };
        case LOGIN_FALSE:
            return {
                ...state,
                isLoading: false,
                error: {
                    ...state.error,
                    login: action.payload
                },
            };
        case SIGN_UP:
            return {
                ...state,
                isLoading: true
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: {},
                userID: action.payload
            };
        case SIGN_UP_FALSE:
            return {
                ...state,
                isLoading: false,
                error: {
                    ...state.error,
                    signUp: action.payload,
                }
            };
        default:
            return state;
    }
}