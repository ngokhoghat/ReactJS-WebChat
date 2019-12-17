import { combineReducers } from "redux";


const initialState = {
    isPinging: false
}

export function pingReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'PING':
            console.log("G");
            
            return {
                ...state,
                isPinging: true
            };

        case 'PONG':
            return { isPinging: false };

        default:
            return state;
    }
};

export const testEpic = combineReducers({
    pingReducer,
})
