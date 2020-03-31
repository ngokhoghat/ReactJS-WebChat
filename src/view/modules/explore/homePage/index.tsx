import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './header';
import FriendList from './friendList';
import ChatBox from './chatBox';
import BottomTab from './bottomTab';

import { getUserFriendList, getMessage } from '../../../redux/actions/user'

import './style.scss';
import firebase from '../../../firebase'
interface IProp {
    data: any,
    getUserFriendList: (params: any) => void
    getMessage: (params: any) => void
}

const HomePage = React.memo((props: IProp) => {

    const { data } = props;

    if (data.user && data.user.id) {
        useEffect(() => {
            props.getUserFriendList(data.user.id);
            props.getMessage(data.user.message_id);
        }, [])
        return (
            <div id="main-content" className="main-content">
                <div className="box-content" >
                    {data.user ? <Header data={data.user} /> : null}
                    {data.friendList ? <FriendList data={data.friendList} /> : null}
                    {data.oldMessage ? <ChatBox data={data.oldMessage} /> : null}
                    <BottomTab />
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
})

const mapStateToProps = (state: any) => {
    return {
        data: state.userReducers.userReducer.data,
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        getUserFriendList,
        getMessage
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)