import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response: any) => {
    console.log(response);
}

export default class Google extends Component {
    render() {
        return (
            <GoogleLogin
                clientId="542888842456-42cgb7rjm61ptik5lmso138co2hoaem2.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        )
    }
}
