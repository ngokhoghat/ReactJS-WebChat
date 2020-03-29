import { IAction } from "../../../shared/interfaces/common";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILD = "GET_USER_FAILD";

export const GET_USER_FRIEND_LIST = "GET_USER_FRIEND_LIST";
export const GET_USER_FRIEND_LIST_SUCCESS = "GET_USER_FRIEND_LIST_SUCCESS";
export const GET_USER_FRIEND_LIST_FAILD = "GET_USER_FRIEND_LIST_FAILD";

// Lấy dữ liệu người dùng
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

// Lấy danh sách bạn bè
export const getUserFriendList = (payload?: any): IAction<any> => {
    return {
        type: GET_USER_FRIEND_LIST,
        payload
    }
}

export const getUserFriendListSuccess = (payload: any): IAction<any> => {
    return {
        type: GET_USER_FRIEND_LIST_SUCCESS,
        payload
    }
}

export const getUserFriendListFaild = (payload?: any): IAction<any> => {
    return {
        type: GET_USER_FRIEND_LIST_FAILD,
        payload
    }
}
