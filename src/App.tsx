import React, { Component } from 'react';
import { Provider } from 'react-redux'

import './App.scss';
import AppContainer from './AppContainer';
import store from './view/redux/store';

interface IProps {

}

interface IState {
}


// import Button from './view/components/button';

class App extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		);
	}
}

export default App;
