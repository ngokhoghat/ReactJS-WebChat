import { combineReducers } from "redux"
import { GET_USER } from "../../actions/login";


const initialState = {
    isAut: false,
    user: {
        fullName: null,
        email: null,
        firstName: null,
        lastName: null,
        img: null
    }
}


export function loginReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case GET_USER:
            console.log(action);
            const user = action.payload;
            return {
                ...state,
                isAut: true,
                user: {
                    fullName: user.name,
                    email: user.email,
                    firstName: user.familyName,
                    lastName: user.givenName,
                    img: user.imageUrl
                },
            }
        default:
            return state;
    }
}

export const loginPageReducer = combineReducers({
    loginReducer,
})