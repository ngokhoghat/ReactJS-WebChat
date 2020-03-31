import React, { useState, Props } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { login } from '../../../../../redux/actions/auth';
// import FaceBookBtn from '../../components/FaceBookBtn';
// import GoogleBtn from '../../components/GoogleBtn';
interface IProps {
    login: any
}
interface IStates {
    u_name: any;
    u_pass: any;
}

const LoginPageFormLogin = (props: IProps) => {
    const [state, setstate] = useState({
        u_name: "",
        u_pass: "",
    })

    const _handelSubmit = (event: any) => {
        event.preventDefault();
        const { u_name, u_pass } = state;
        const user = {
            u_name,
            u_pass
        }
        props.login(user)
    }
    const _handelChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name: any = target.name;
        setstate({ ...state, [name]: value });
    }
    return (
        <form onSubmit={_handelSubmit} className="login-page-form">
            <h3 className="login-page-form__title">Login</h3>
            <div className="form-group mt-5">
                <label htmlFor="">Usename</label>
                <input onChange={_handelChange} name="u_name" value={state.u_name} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input onChange={_handelChange} name="u_pass" value={state.u_pass} className="form-control" type="password" />
            </div>
            <div className="form-group text-right">
                <Link className="forgotPassword" to="/">Forgot password?</Link>
            </div>
            <div className="form-group mt-4">
                <input className="btn btn-primary login-btn" type="submit" value="Login" />
            </div>
            <div className="loginSocial mt-5">
                <div>
                    <p className="w-100">Or Sign Up Using</p>
                </div>
                <div className="loginSocial__icon">
                    {/* <GoogleBtn />
                        <FaceBookBtn /> */}
                </div>
            </div>
            <div className="signin mt-5">
                <Link to="/sign-in">SIGN IN</Link>
            </div>
        </form>
    )
}


const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        login
    },
    dispatch,
);

export default connect(null, mapDispatchToProps)(LoginPageFormLogin)