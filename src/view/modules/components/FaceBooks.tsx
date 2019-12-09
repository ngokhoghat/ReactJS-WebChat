import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response: any) => {
    console.log(response);
}

export default class FaceBooks extends Component {
    render() {
        return (
            <FacebookLogin
                appId="2506281752983102"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
                version="3.1"
            />
        )
    }
}
