import { combineReducers } from "redux"
import { IAction } from "../../../shared/interfaces/common";
import { GET_USER_SUCCESS, GET_USER_FAILD, GET_USER_FRIEND_LIST_SUCCESS, SET_ONLINE_SUCCESS, SET_ONLINE_FAILD, GET_MESSAGE_SUCCESS } from "../../actions/user";


const initialState = {
    isAut: false,
    isLoading: false,
    error: null,
    data: {
        friendList: [],
        user: null,
        isOnline: false,
        oldMessage: null
    },
}


export function userReducer(state: any = initialState, action: IAction<any>) {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    user: action.payload
                }
            };
        case GET_USER_FAILD:
            return {
                ...state,
                error: action.payload,
            };
        case SET_ONLINE_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    isOnline: true
                }
            };
        case SET_ONLINE_FAILD:
            return {
                ...state,
                data: {
                    ...state.data,
                    isOnline: false
                }
            };
        case GET_USER_FRIEND_LIST_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    friendList: [action.payload]
                }
            };
        case GET_MESSAGE_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    oldMessage: action.payload
                }
            };
        default:
            return state;
    }
}

export const userReducers = combineReducers({
    userReducer,
})