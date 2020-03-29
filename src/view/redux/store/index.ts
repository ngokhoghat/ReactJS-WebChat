import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import { rootReducer } from "../reducers";
import { rootEpic } from '../epics';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
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