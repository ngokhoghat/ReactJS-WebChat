import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './App.scss';

import AppContainer from './AppContainer';

const initialState = {
	name: 'manh'
}
const rootReducer = (state = initialState, action: any) => {
	return state;
}
const store = createStore(rootReducer);
interface IProps {

}

interface IState {
}


// import Button from './view/components/button';

class App extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
		}
	}
	componentDidMount = () => {

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
