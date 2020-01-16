import { combineReducers } from "redux"
import { LOGIN, LOGIN_SUCCESS, LOGIN_FALSE } from "../../actions/login";
import { IAction } from "../../../shared/interfaces/common";


const initialState = {
    isAut: false,
    isLoading: false,
    error: null,
    user: {
        fullName: null,
        email: null,
        firstName: null,
        lastName: null,
        img: null
    }
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
                isAut: true,
                isLoading: false
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