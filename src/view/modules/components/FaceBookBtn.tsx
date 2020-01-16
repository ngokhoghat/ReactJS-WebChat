import React, { Component } from 'react'
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import logo from '../../../assets/image/svg/facebook-f-brands.svg'
const responseFacebook = (response: any) => {
    console.log(response);
}

export default class FaceBookBtn extends Component {
    render() {
        return (
            <FacebookLogin
                appId="2506281752983102"
                autoLoad={true}
                // @ts-ignore
                render={(renderProps: any) => (
                    <button className="socialBtn fb" onClick={renderProps.onClick}>
                        <img src={logo} alt="" />
                    </button>
                )}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
                version="3.1"
            />
        )
    }
}
