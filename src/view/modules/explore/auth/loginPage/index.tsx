import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import LoginPageFormLogin from './loginPageForm/LoginPageFormLogin';
import LoginPageLoading from '../../../components/loading/Loading';
import './style.scss'

interface IProps {
    currentUser: any,
    error: any,
    isLoading: any;
}

const LoginPage = (props: IProps) => {
    const { currentUser, error, isLoading } = props;
    if (currentUser) { return <Redirect to="/" /> }
    return (
        <div className="login_page">
            <LoginPageFormLogin />
            {(isLoading) ? <LoginPageLoading /> : null}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        currentUser: state.authReducers.currentUser,
        error: state.authReducers.error,
        isLoading: state.authReducers.isLoading,
    }
}

export default connect(mapStateToProps)(LoginPage)