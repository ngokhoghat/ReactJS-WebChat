import React, { useState } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { signUp } from '../../../../../redux/actions/auth'

interface Props {
    signUp: (params: any) => void
}


const RegisterForm = (props: Props) => {
    const [inputValues, setInputValues] = useState({
        u_name: "",
        u_mail: "",
        u_pass: "",
        u_re_pass: ""
    });

    const _handelSubmit = (e: any) => {
        e.preventDefault();
        console.log(inputValues);
        props.signUp(inputValues)
    }
    const _handelChange = (e: any) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value })
    }
    return (
        <form onSubmit={_handelSubmit} className="login-page-form">
            <h3 className="login-page-form__title">Sign Up</h3>
            <div className="form-group mt-5">
                <label htmlFor="">Usename</label>
                <input onChange={_handelChange} name="u_name" value={inputValues.u_name} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input onChange={_handelChange} name="u_mail" value={inputValues.u_mail} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input onChange={_handelChange} name="u_pass" value={inputValues.u_pass} className="form-control" type="password" />
            </div>
            <div className="form-group">
                <label htmlFor="">Re-Password</label>
                <input onChange={_handelChange} name="u_re_pass" value={inputValues.u_re_pass} className="form-control" type="password" />
            </div>
            <div className="form-group text-right">
            </div>
            <div className="form-group mt-4">
                <input className="btn btn-primary login-btn" type="submit" value="Register" />
            </div>
        </form>
    )
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        signUp
    },
    dispatch,
);

export default connect(null, mapDispatchToProps)(RegisterForm)