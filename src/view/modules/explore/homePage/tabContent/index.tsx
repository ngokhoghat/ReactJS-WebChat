import React, { Component } from 'react'
import './style.scss'
import Chats from './chats'
import FriendList from './friendsList'


export default class TabContent extends Component {
    render() {
        return (
            <div className="tab-content">
                {/* <Chats/> */}
                <FriendList/>
            </div>
        )
    }
}
