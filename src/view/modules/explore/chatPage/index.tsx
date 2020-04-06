import React, { useEffect, useRef, useState } from 'react'

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
    const [state, setstate] = useState({
        message: [
            { id: 1, message: "FAFAS" },
            { id: 2, message: "FAFAS" },
            { id: 1, message: "FAFAS" },
        ]
    })
    console.log(state);
    const messagesEndRef = useRef(null)
    useEffect(() => {
        // props.
    }, [])
    return (
        <div className="chat-page">
            <Header />
            <div className="chat-page__box-content">
                {
                    state.message.map((val, i) => {
                        return (
                            <div className={`chat-page__box-content--${val.id === 1 ? "user" : "friend"}`} key={i}>
                                <div className="avatar">
                                    <div className="avatar__img">
                                        <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                                        <span><p></p></span>
                                    </div>
                                </div>
                                <div className="message">
                                    <div className="message__content">asd</div>
                                    <div className="message__content">asd</div>
                                </div>
                            </div>
                        )
                    })
                }
                <div ref={messagesEndRef} />
            </div>
            <div className="chat-page__bottom-bar">
                <div className="chat-page__bottom-bar--social-group">
                    <i className="fas fa-camera"></i>
                    <i className="far fa-image"></i>
                    <i className="fas fa-microphone"></i>
                </div>
                <div className="chat-page__bottom-bar--chat-input">
                    <div className="input">
                        <input type="text" placeholder="Aa" onClick={() => { }} />
                        <i className="fas fa-smile"></i>
                    </div>
                </div>
                <div className="chat-page__bottom-bar--like-btn">
                    <i className="fas fa-thumbs-up" onClick={() => {
                        //@ts-ignore
                        let a = state.message;
                        a.push({ id: 2, message: "asd" })
                        setstate({ message: a })
                    }}></i>
                </div>
            </div>
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