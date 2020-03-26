import React, { Component } from 'react';
import { Provider } from 'react-redux'



import './App.scss';
import AppContainer from './AppContainer';
import { configureStore } from './view/redux/store/index';

interface IProps {

}

interface IState {
}

const store = configureStore()
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
