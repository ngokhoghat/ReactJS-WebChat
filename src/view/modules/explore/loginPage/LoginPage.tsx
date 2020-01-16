import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import '../../../../assets/styles/loginPage/login_page.scss'
import LoginPageFormLogin from './LoginPageFormLogin';
import LoginPageLoading from './LoginPageLoading';
interface IProps {
    isAut: any,
    error: any,
    isLoading: any;
}
interface IStates {
    u_name: any,
    u_pass: any,
    isStopped: any;
    isPaused: any
}

class LoginPage extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            u_name: "",
            u_pass: "",
            isStopped: false,
            isPaused: false
        }
    }

    componentDidMount = () => {
    }

    render() {

        // const { isLoading } = this.state;
        const { isAut, error, isLoading } = this.props;

        if (isAut == true) {
            return <Redirect to={{ pathname: "/home" }} />
        } else {
            return (
                <div className="container-fluid login_page">
                    <LoginPageFormLogin />
                    {(isLoading) ? <LoginPageLoading /> : null}
                </div>
            )
        }
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