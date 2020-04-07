import { IAction } from "../../../../shared/interfaces/common";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILD = "GET_USER_FAILD";

export const SET_ONLINE = "SET_ONLINE";
export const SET_ONLINE_SUCCESS = "SET_ONLINE_SUCCESS";
export const SET_ONLINE_FAILD = "SET_ONLINE_FAILD";

export const GET_MESSAGE = "GET_MESSAGE";
export const GET_MESSAGE_SUCCESS = "GET_MESSAGE_SUCCESS";
export const GET_MESSAGE_FAILD = "GET_MESSAGE_FAILD";

export const GET_USER_FRIEND_LIST = "GET_USER_FRIEND_LIST";
export const GET_USER_FRIEND_LIST_SUCCESS = "GET_USER_FRIEND_LIST_SUCCESS";
export const GET_USER_FRIEND_LIST_FAILD = "GET_USER_FRIEND_LIST_FAILD";

export const CLEAR_DATA_USER = "CLEAR_DATA_USER"
export const CANCEL = "CANCEL"

export const clearDataUser = () => {
    return {
        type: CLEAR_DATA_USER
    }
}
export const cancel = () => {
    return {
        type: CANCEL
    }
}
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

// Cập nhật trạng thái online/offline
export const setOnline = (payload: any): IAction<any> => {
    return {
        type: SET_ONLINE,
        payload
    }
}

export const setOnlineSuccess = (payload: any): IAction<any> => {
    return {
        type: SET_ONLINE_SUCCESS,
        payload
    }
}

export const setOnlineFaild = (payload: any): IAction<any> => {
    return {
        type: SET_ONLINE_FAILD,
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

// Lấy danh sách bạn bè
export const getMessage = (payload?: any): IAction<any> => {
    return {
        type: GET_MESSAGE,
        payload
    }
}

export const getMessageSuccess = (payload: any): IAction<any> => {
    return {
        type: GET_MESSAGE_SUCCESS,
        payload
    }
}

export const getMessageFaild = (payload?: any): IAction<any> => {
    return {
        type: GET_MESSAGE_FAILD,
        payload
    }
}
