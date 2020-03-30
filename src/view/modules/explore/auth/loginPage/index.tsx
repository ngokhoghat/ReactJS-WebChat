import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import LoginPageFormLogin from './loginPageForm/LoginPageFormLogin';
import LoginPageLoading from '../../../components/loading/Loading';
import './style.scss'

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
        isAut: state.authReducers.loginPageReducer.loginReducer.isAut,
        error: state.authReducers.loginPageReducer.loginReducer.error,
        isLoading: state.authReducers.loginPageReducer.loginReducer.isLoading,
    }
}

export default connect(mapStateToProps)(LoginPage)