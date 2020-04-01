import { IAction } from "../../../shared/interfaces/common";

export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const GET_CURRENT_USER_FAILD = 'GET_CURRENT_USER_FAILD';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FALSE = 'LOGIN_FALSE';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FALSE = 'LOGOUT_FALSE';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FALSE = 'SIGN_UP_FALSE';

// lấy current user
export const getCurrentUser = (payload?: any): IAction<any> => {
    return {
        type: GET_CURRENT_USER,
        payload
    }
}

export const getCurrentUserSuccess = (payload?: any): IAction<any> => {
    return {
        type: GET_CURRENT_USER_SUCCESS,
        payload
    }
}

export const getCurrentUserFaild = (payload?: any): IAction<any> => {
    return {
        type: GET_CURRENT_USER_FAILD,
        payload
    }
}

// LOGIN
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

// LOGOUT
export const logout = (payload: any): IAction<any> => {
    return {
        type: LOGOUT,
        payload
    }
}

export const logoutSuccess = (payload: any): IAction<any> => {
    return {
        type: LOGOUT_SUCCESS,
        payload
    }
}

export const logoutFalse = (payload: any): IAction<any> => {
    return {
        type: LOGOUT_FALSE,
        payload
    }
}

//SIGN_UP
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

