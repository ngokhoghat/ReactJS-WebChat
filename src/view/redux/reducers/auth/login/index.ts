import { combineReducers } from "redux"
import { LOGIN, LOGIN_SUCCESS, LOGIN_FALSE } from "../../../actions/auth";
import { IAction } from "../../../../shared/interfaces/common";


const initialState = {
    isLoading: false,
    error: null,
    user: null
}


export function loginReducer(state: any = initialState, action: IAction<any>) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_FALSE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}

export const loginPageReducer = combineReducers({
    loginReducer,
})