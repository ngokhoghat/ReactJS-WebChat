import React, { Component } from 'react';
import './App.scss';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
interface IProps {

}

interface IState {
	speed: any
}
const responseGoogle = (response: any) => {
	console.log(response);
}
const responseFacebook = (response: any) => {
	console.log(response);
}
// import Button from './view/components/button';

class App extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			speed: null
		}
	}
	componentDidMount = () => {
		// const rootRef = firebase.database().ref().child('react');
		// const speedRef = rootRef.child('speed');
		// speedRef.on('value', snap => {
		//   console.log(snap.val());

		//   this.setState({
		//     speed: snap.val()
		//   })
		// })
		// console.log(speedRef);

	}
	render() {
		return (
			<div className="App" >
				<GoogleLogin
					clientId="542888842456-42cgb7rjm61ptik5lmso138co2hoaem2.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
				<FacebookLogin
					appId="2506281752983102"
					autoLoad={true}
					fields="name,email,picture"
					callback={responseFacebook}
					cssClass="my-facebook-button-class"
					icon="fa-facebook"
					version="3.1"
				/>
			</div>
		);
	}
}

export default App;
