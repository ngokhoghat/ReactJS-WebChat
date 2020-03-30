import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { configureStore } from './view/redux/store/index';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';

import AppContainer from './AppContainer';
import './App.scss';

const store = configureStore()
let persistor = persistStore(store)


const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppContainer />
			</PersistGate>
		</Provider>
	);
}

export default App;
