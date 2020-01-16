import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from 'redux-logger';
import { rootReducer } from "../reducers";
import { rootEpic } from '../epics';

const epicMiddleware = createEpicMiddleware();

export const configureStore = () => {
    const middlewares: any = [epicMiddleware];
    middlewares.push(createLogger())
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middlewares)
        )
    );

    epicMiddleware.run(rootEpic);
    return store;
}