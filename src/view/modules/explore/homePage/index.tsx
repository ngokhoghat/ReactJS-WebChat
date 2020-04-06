import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './header';
import FriendList from './friendList';
import ChatBox from './chatBox';
import BottomTab from './bottomTab';

import { getUser, getUserFriendList, getMessage } from '../../../redux/actions/user'
import firebase from '../../../firebase'
import './style.scss';
import LoaddingCirle from '../../components/loading/LoaddingCirle';
interface IProp {
    currentUser: any;
    userData: any;
    getUser: (params: any) => void;
    getUserFriendList: (params: any) => void;
    getMessage: (params: any) => void;
}

const HomePage = ((props: IProp) => {
    const { currentUser, userData } = props;

    useEffect(() => {
        if (currentUser && currentUser.uid) {
            props.getUser(currentUser.uid);
            if (userData && userData.user) {
                props.getUserFriendList(userData.user[0].id);
                props.getMessage(userData.user[0].message_id);
            }
        }
    }, [])
    if (userData && userData.user) {
        return (
            <div id="main-content" className="main-content">
                <div className="box-content" >
                    <div onClick={() => { firebase.auth().signOut() }}>Log Out</div>
                    <Header data={userData.user[0]} />
                    <FriendList data={userData.friendList} />
                    <ChatBox data={userData.oldMessage} />
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
        currentUser: state.authReducers.currentUser,
        userData: state.userReducers.userReducer.data
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        getUser,
        getMessage,
        getUserFriendList
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)