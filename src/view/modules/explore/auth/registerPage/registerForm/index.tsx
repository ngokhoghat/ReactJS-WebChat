import React, { useState } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { signUp } from '../../../../../redux/actions/auth'
import ModalError from '../../../../components/modal/ModalError';

interface Props {
    signUp: (params: any) => void;
}


const RegisterForm = (props: Props) => {
    const [inputValues, setInputValues] = useState({
        u_FirstName: "",
        u_Lastname: "",
        u_Email: "",
        u_Password: "",
        u_Re_PassWord: "",
        error: ""
    });

    const _handelSubmit = (e: any) => {
        e.preventDefault();
        if (inputValues.u_Password !== inputValues.u_Re_PassWord) {
            setInputValues({ ...inputValues, error: "Mật khẩu nhập lại không đúng" });
        } else {
            setInputValues({ ...inputValues, error: "" });
            props.signUp(inputValues)
        }

    }
    const _handelChange = (e: any) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value })
    }
    return (
        <form onSubmit={_handelSubmit} className="login-page-form">
            <h3 className="login-page-form__title">Sign Up</h3>
            <div className="form-group mt-4">
                <label htmlFor="">First Name</label>
                <input onChange={_handelChange} name="u_FirstName" value={inputValues.u_FirstName} className="form-control" required />
            </div>
            <div className="form-group">
                <label htmlFor="">Last Name</label>
                <input onChange={_handelChange} name="u_Lastname" value={inputValues.u_Lastname} className="form-control" required />
            </div>
            <div className="form-group">
                <label htmlFor="">Email Address</label>
                <input onChange={_handelChange} name="u_Email" value={inputValues.u_Email} className="form-control" required type="email" />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input onChange={_handelChange} name="u_Password" value={inputValues.u_Password} className="form-control" type="password" required />
            </div>
            <div className="form-group">
                <label htmlFor="">Confirm Password</label>
                <input onChange={_handelChange} name="u_Re_PassWord" value={inputValues.u_Re_PassWord} className="form-control" type="password" required />
                <p style={{ textAlign: "center", color: "red", marginTop: 5 }}>{inputValues.error}</p>
            </div>
            <div className="form-group mt-4">
                <input className="btn btn-primary login-btn" type="submit" value="Submit" />
            </div>
            <ModalError />
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