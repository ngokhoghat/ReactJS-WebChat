import React, { Component, useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './header';
import FriendList from './friendList';
import ChatBox from './chatBox';
import BottomTab from './bottomTab';

import { getUserFriendList } from '../../../redux/actions/user'

import './style.scss';

interface IProp {
    user: any,
    getUserFriendList: (params: any) => void
}

const HomePage = (props: IProp) => {
    const { user } = props;
    useEffect(() => {
        if (user.user && user.user.id) {
            props.getUserFriendList(user.user.id)
        }
    })
    if (user.user) {
        return (
            <div id="main-content" className="main-content">
                <div className="box-content" >
                    {user.user ? <Header data={user.user} /> : null}
                    {user.friendList ? <FriendList data={user.friendList} /> : null}
                    <ChatBox />
                    <BottomTab />
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducers.userReducer.data,
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        getUserFriendList
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)