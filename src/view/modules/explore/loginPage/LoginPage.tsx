import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import './loginPage/login_page.scss'
import LoginPageFormLogin from './LoginPageFormLogin';
import LoginPageLoading from './LoginPageLoading';
interface IProps {
    isAut: any,
    error: any,
    isLoading: any;
}

const LoginPage = (props: IProps) => {

    const { isAut, error, isLoading } = props;
    if (isAut == true) {
        return <Redirect to={{ pathname: "/home" }} />
    } else {
        return (
            <div className="login_page">
                <LoginPageFormLogin />
                {(isLoading) ? <LoginPageLoading /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAut: state.loginPageReducer.loginReducer.isAut,
        error: state.loginPageReducer.loginReducer.error,
        isLoading: state.loginPageReducer.loginReducer.isLoading,
    }
}

export default connect(mapStateToProps)(LoginPage)