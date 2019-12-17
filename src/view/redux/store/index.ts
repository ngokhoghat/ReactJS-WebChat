import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers";
import { rootEpic } from '../epics';


const epicMiddleware = createEpicMiddleware();
const composeEnhancers = compose;


export const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(epicMiddleware)
        )
    );
    
    epicMiddleware.run(rootEpic);

    return store;
}