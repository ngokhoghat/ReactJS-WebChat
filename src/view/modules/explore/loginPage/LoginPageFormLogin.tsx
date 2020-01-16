import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



import { login } from '../../../redux/actions/login';
import FaceBookBtn from '../../components/FaceBookBtn';
import GoogleBtn from '../../components/GoogleBtn';
import '../../../../assets/styles/loginPage/login_pageForm.scss'
import { bindActionCreators } from 'redux';
interface IProps {
    login: any
}
interface IStates {
    u_name: any;
    u_pass: any;
}

class LoginPageFormLogin extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            u_name: "",
            u_pass: "",
        }
    }

    _handelSubmit = (event: any) => {
        const { u_name, u_pass } = this.state;

        const user = {
            u_name,
            u_pass
        }
        event.preventDefault();
        this.props.login(user)
    }
    _handelChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name: any = target.name;

        // @ts-ignore
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form onSubmit={this._handelSubmit} className="login_pageForm">
                <h3 className="login_pageForm--title">Login</h3>
                <div className="form-group mt-5">
                    <label htmlFor="">Usename</label>
                    <input onChange={this._handelChange} name="u_name" value={this.state.u_name} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input onChange={this._handelChange} name="u_pass" value={this.state.u_pass} className="form-control" type="password" />
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
                        <GoogleBtn />
                        <FaceBookBtn />
                    </div>
                </div>
                <div className="signin mt-5">
                    <Link to="">SIGN IN</Link>
                </div>
            </form>
        )
    }
}


const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        login
    },
    dispatch,
);

export default connect(null, mapDispatchToProps)(LoginPageFormLogin)