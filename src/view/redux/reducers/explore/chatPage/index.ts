import { combineReducers } from "redux"
import { IAction } from "../../../../shared/interfaces/common";
import { GET_USER_SUCCESS, GET_USER_FRIEND_LIST_SUCCESS, GET_MESSAGE_SUCCESS, CLEAR_DATA_USER } from "../../../actions/explore/homePage";


const initialState = {
    isLoading: false,
    error: null,
    data: {
        user: null,
        friendList: [],
        message: [],
    },
}


export function homeReducer(state: any = initialState, action: IAction<any>) {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    user: action.payload
                }
            }
        case GET_USER_FRIEND_LIST_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    friendList: action.payload
                }
            }
        case GET_MESSAGE_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    message: action.payload
                }
            }

        case CLEAR_DATA_USER:
            return {
                ...state,
                data: {
                    user: null,
                    friendList: [],
                    message: [],
                },
            }

        default:
            return state;
    }
}
