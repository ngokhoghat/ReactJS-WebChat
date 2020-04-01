import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegisterForm from './registerForm';
import Loading from '../../../components/loading/Loading';



interface IProps {
    isAut: any,
    error: any,
    isLoading: any;
    currentUser: any
}


const RegisterPage = (props: IProps) => {
    const { currentUser, error, isLoading } = props;
    if (currentUser) { return <Redirect to="/" /> }
    return (
        <div className="login_page">
            <RegisterForm />
            {(isLoading) ? <Loading /> : null}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.authReducers.isLoading,
        currentUser: state.authReducers.currentUser,
    }
}
export default connect(mapStateToProps)(RegisterPage)