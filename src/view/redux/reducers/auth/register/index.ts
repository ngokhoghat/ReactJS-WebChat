import { combineReducers } from "redux"
import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FALSE } from "../../../actions/auth";
import { IAction } from "../../../../shared/interfaces/common";


const initialState = {
    isAut: false,
    isLoading: false,
    error: null,
    data: {}
}


export function signUpReducer(state: any = initialState, action: IAction<any>) {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                isLoading: true
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isAut: true,
                isLoading: false,
                data: action.payload
            };
        case SIGN_UP_FALSE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}

export const signUpReducers = combineReducers({
    signUpReducer,
})