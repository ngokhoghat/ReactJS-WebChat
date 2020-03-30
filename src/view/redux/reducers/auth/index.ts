import { combineReducers } from "redux";
import { loginPageReducer } from './login'
import { signUpReducers } from './register'


export const authReducers = combineReducers({
    loginPageReducer,
    signUpReducers
})