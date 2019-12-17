import { IAction } from "../../../shared/interfaces/common";

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FALSE = 'LOGIN_FALSE';




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
