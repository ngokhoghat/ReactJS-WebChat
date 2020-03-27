import { IAction } from "../../../shared/interfaces/common";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILD = "GET_USER_FAILD";


export const getUser = (payload: any): IAction<any> => {
    return {
        type: GET_USER,
        payload
    }
}

export const getUserSuccess = (payload: any): IAction<any> => {
    return {
        type: GET_USER_SUCCESS,
        payload
    }
}

export const getUserFaild = (payload: any): IAction<any> => {
    return {
        type: GET_USER_FAILD,
        payload
    }
}
