import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import logo from '../../../assets/image/svg/google-brands.svg'
import { login } from '../../redux/actions/login';
interface Iprop {
    login: any
}
interface Istate {

}

class GoogleBtn extends Component<Iprop, Istate> {


    responseGoogle = (response: any) => {
        this.props.login(response.profileObj)
    }
    render() {
        return (
            <GoogleLogin
                clientId="542888842456-42cgb7rjm61ptik5lmso138co2hoaem2.apps.googleusercontent.com"
                buttonText=""
                render={renderProps => (
                    <button className="socialBtn" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img src={logo} alt="" />
                    </button>
                )}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                className="socialBtn"
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        aut: state.loginPageReducer
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        login
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(GoogleBtn)