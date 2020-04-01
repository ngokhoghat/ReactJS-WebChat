import React, { Component, useEffect } from 'react'

import './style.scss'
import Header from './header'
import BoxContent from './boxContent'
import BottomBar from './bottomBar'
import { useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

interface Props {

}

const ChatPage = (props: Props) => {
    let history = useHistory();
    useEffect(() => {
        // props.
    }, [])
    return (
        <div className="chat-page">
            <Header />
            <BoxContent />
            <BottomBar />
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        // user: state.userReducers.userReducer.data.user,
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)