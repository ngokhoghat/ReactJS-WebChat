import { IAction } from "../../../../shared/interfaces/common";
import { GET_MESSAGE_BY_ID_SUCCESS } from "../../../actions/explore/chatPage";


const initialState = {
    isLoading: false,
    error: null,
    data: null,
}


export function chatReducer(state: any = initialState, action: IAction<any>) {
    switch (action.type) {
        case GET_MESSAGE_BY_ID_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
