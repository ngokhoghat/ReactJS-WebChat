import { combineReducers } from "redux"
import { IAction } from "../../../shared/interfaces/common";
import { GET_USER_SUCCESS, GET_USER_FAILD, GET_USER_FRIEND_LIST_SUCCESS } from "../../actions/user";


const initialState = {
    isAut: false,
    isLoading: false,
    error: null,
    data: {
        friendList: []
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
        case GET_USER_FRIEND_LIST_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    friendList: [...state.data.friendList, action.payload]
                }
            };
        default:
            return state;
    }
}

export const userReducers = combineReducers({
    userReducer,
})