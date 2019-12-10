import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

interface IProp {
    user: any
}
interface IState {

}
class HomePage extends Component<IProp, IState> {


    showUser = () => {
        const { user } = this.props;
        if (user.fullName) {
            return (
                <div key={user.fullName}>
                    <h2>Wellcome {user.fullName}</h2>
                    <p>Email: </p>
                    <img src={user.img} />
                </div>
            )
        } else {
            return ""
        }
    }

    render() {
        return (
            <div>
                <h2>Trang chủ</h2>
                {this.showUser()}
                <Link to="/product">Prodcut</Link>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.loginPageReducer.loginReducer.user
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)