import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import FaceBooks from '../../components/FaceBooks';
import Google from '../../components/google';
import { login } from '../../../redux/actions/login';
interface IProps {
    login: any,
    isAut: any
}
interface IStates {
    isLoading: any,
    u_name: any,
    u_pass: any,
}

class LoginPage extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: false,
            u_name: "",
            u_pass: ""
        }
    }

    componentDidMount = () => {
    }

    _handelSubmit = (event: any) => {
        event.preventDefault();
        this.props.login()
        // this.setState((preState) => {
        //     return {
        //         ...preState,
        //         isLoading: true,
        //     }
        // })
        // setTimeout(() => {
        //     this.setState((preState) => {
        //         return {
        //             ...preState,
        //             isLoading: false,
        //             isAut: true,
        //         }
        //     })
        // }, 3000);

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
        const { isLoading } = this.state;
        const { isAut } = this.props;

        if (isAut == true) {
            return <Redirect to={{ pathname: "/home", state: { userName: "" } }} />
        } else {
            return (
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-4">

                        <form onSubmit={this._handelSubmit}>
                            <h3>Form Login</h3>
                            <div className="form-group">
                                <input onChange={this._handelChange} name="u_name" value={this.state.u_name} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input onChange={this._handelChange} name="u_pass" value={this.state.u_pass} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary" type="submit" value="Login" />
                                {/* <Google /> */}
                                {/* <FaceBooks /> */}
                            </div>
                            {
                                (isLoading) ? (
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ) : null
                            }
                        </form>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAut: state.loginPageReducer.loginReducer.isAut
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        login
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)