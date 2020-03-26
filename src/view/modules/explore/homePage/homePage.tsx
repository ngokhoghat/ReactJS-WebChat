import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './homePage.scss';
import Header from './header';
import TabBar from './tabBar';
import TabContent from './tabContent';
import FriendList from './friendList';
import ChatBox from './chatBox';
interface IProp {
    user: any
}
interface IState {

}
class HomePage extends Component<IProp, IState> {

    render() {
        return (
            <div id="main-content" className="main-content">
                <div className="box-content" >
                    <Header />
                    <FriendList />
                    <ChatBox />
                    {/* <TabBar /> */}
                    {/* <TabContent /> */}
                </div>
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