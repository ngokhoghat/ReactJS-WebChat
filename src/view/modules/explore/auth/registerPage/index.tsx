import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegisterForm from './registerForm';
import Loading from '../../../components/loading/Loading';



interface IProps {
    isAut: any,
    error: any,
    isLoading: any;
}


const RegisterPage = (props: IProps) => {

    const { isAut, error, isLoading } = props;
    if (isAut == true) {
        return <Redirect to={{ pathname: "/home" }} />
    } else {
        return (
            <div className="login_page">
                <RegisterForm />
                {(isLoading) ? <Loading /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAut: state.authReducers.signUpReducers.signUpReducer.isAut,
        error: state.authReducers.signUpReducers.signUpReducer.error,
        isLoading: state.authReducers.signUpReducers.signUpReducer.isLoading,
    }
}
export default connect(mapStateToProps)(RegisterPage)