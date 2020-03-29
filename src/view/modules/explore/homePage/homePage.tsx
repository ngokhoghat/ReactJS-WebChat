import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './homePage.scss';
import Header from './header';
import FriendList from './friendList';
import ChatBox from './chatBox';
import BottomTab from './bottomTab';
interface IProp {
    user: any,
    test: any
}

class HomePage extends Component<IProp> {
    // console.log(props.user.friendList);
    // const list = props.user && props.user.friendList ? props.user.friendList.map((val: any, i: any) => {
    //     return (
    //         <div key={i}>"ASdasd</div>
    //     )
    // }) : null
    render() {
        const { user } = this.props;
        if (user.friendList) {
            const friendID = user.friendList.map((item: any) => {
                return item.id
            })
            let x = (friendID: any) => friendID.filter((v: any, i: any) => friendID.indexOf(v) === i)
            const a = x(friendID);
            const last = a.map((v: any, i: any) => {
                let a = v;
                user.friendList.reverse().map((val: any, i: any) => {
                    if (val.id == a) {
                        a = val;
                    }
                })
                return a;
            })
            console.log("NNNN",last);
        }
        // const list = this.props.user.friendList ? this.props.user.friendList.map((val: any, i: any) => {
        //     console.log("HELLO", val);
        //     return <div key={i}>asdasdasdsas</div>
        // }) : null
        return (
            <div id="main-content" className="main-content">
                <div className="box-content" >
                    {/* {list} */}
                    {/* <Header data={props.user} /> */}
                    <FriendList />
                    <ChatBox />
                    <BottomTab />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducers.userReducer.data,
        test: state.userReducers.userReducer.test,
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)