import React, { useState, useEffect } from 'react'

import './style.scss'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ModalError = (props: any) => {
    const [state, setstate] = useState(false);

    useEffect(() => {
        if (props.error.signUp && props.error.signUp.message) {
            setstate(true)
        }
        if (props.error.login && props.error.login.message) {
            setstate(true)
        }
    }, [props])
    return (
        <div className="modal-error" style={{ display: state ? "flex" : "none" }}>
            <div className="modal-error__content">
                <div className="close-btn" onClick={() => { setstate(false) }}>
                    <i className="fas fa-times"></i>
                </div>
                <p className="modal-error__content--title">lỗi</p>
                <p className="modal-error__content--content">{props.error.signUp && props.error.signUp.message ? props.error.signUp.message : ""}</p>
                <p className="modal-error__content--content">{props.error.login && props.error.login.message ? props.error.login.message : ""}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        error: state.authReducers.error
    }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ModalError)