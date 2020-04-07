import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './header';
import FriendList from './friendList';
import ChatBox from './chatBox';
import BottomTab from './bottomTab';

import { getUser, getUserFriendList, getMessage, cancel } from '../../../redux/actions/explore/homePage'
import firebase from '../../../firebase'
import './style.scss';
import LoaddingCirle from '../../components/loading/LoaddingCirle';
interface IProp {
    userID: any;
    data: any;
    getUser: (params: any) => void;
    cancel: (params?: any) => void;
    getMessage: (params: any) => void;
    getUserFriendList: (params: any) => void;
}

const HomePage = ((props: IProp) => {
    const [state, setstate] = useState("room1")
    const { userID, data } = props;
    useEffect(() => {
        props.getUser(userID);
        if (data.user && data.user.message_id) {
            props.getMessage(data.user.message_id);
        }
    }, [])
    useEffect(() => {
        props.getUserFriendList({ userID, state });
    }, [])
    if (data.user) {
        return (
            <div id="main-content" className="main-content">
                <div className="box-content" >
                    <div onClick={() => { firebase.auth().signOut() }}>Log Out1</div>
                    <div onClick={() => { props.cancel() }}>Log Out2</div>
                    <div onClick={() => { props.getUserFriendList({ userID: "1sthaz7a3rbykoUlwNAvQK0wgfr2", state }); }}>Log Out3</div>
                    <Header data={data.user} />
                    <FriendList data={data.friendList} />
                    <ChatBox data={data.message} />
                    <BottomTab />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div onClick={() => { firebase.auth().signOut() }}>Log Out</div>
                <LoaddingCirle />
            </div>
        )
    }
})

const mapStateToProps = (state: any) => {
    return {
        userID: state.authReducers.userID,
        data: state.homeReducer.data
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        getUser,
        cancel,
        getMessage,
        getUserFriendList
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)