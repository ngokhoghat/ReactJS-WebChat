import { IAction } from "../../../shared/interfaces/common";

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FALSE = 'LOGIN_FALSE';

export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FALSE = 'SIGN_UP_FALSE';


export const getCurrentUser = (payload?: any): IAction<any> => {
    return {
        type: GET_CURRENT_USER,
        payload
    }
}

export const login = (payload: any): IAction<any> => {
    return {
        type: LOGIN,
        payload
    }
}

export const loginSuccess = (payload: any): IAction<any> => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

export const loginFalse = (payload: any): IAction<any> => {
    return {
        type: LOGIN_FALSE,
        payload
    }
}

export const signUp = (payload: any): IAction<any> => {
    return {
        type: SIGN_UP,
        payload
    }
}

export const signUpSuccess = (payload: any): IAction<any> => {
    return {
        type: SIGN_UP_SUCCESS,
        payload
    }
}

export const signUpFalse = (payload: any): IAction<any> => {
    return {
        type: SIGN_UP_FALSE,
        payload
    }
}

