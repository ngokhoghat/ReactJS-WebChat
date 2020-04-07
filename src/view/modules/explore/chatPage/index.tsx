import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getMessageById } from '../../../redux/actions/explore/chatPage'

import './style.scss'
import Header from './header'
import BoxContent from './boxContent'
import BottomBar from './bottomBar'
import firebase from '../../../firebase'
import LoaddingCirle from '../../components/loading/LoaddingCirle'
interface Props {

}
const ChatPage = (props: any) => {
    let history = useHistory();
    const [state, setstate] = useState({
        message: "",
    })

    const _handelSubmit = (event: any) => {
        event.preventDefault();
        const { message } = state;
        const { useId } = props;
        const messages = {
            message,
            useId
        }
        firebase.firestore().collection("messages").doc("UGZVmrKoHeu6Vc1TIPJR").collection("message").doc(new Date().getTime().toString()).set(messages);
    }
    const _handelChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name: any = target.name;
        setstate({ ...state, [name]: value });
    }
    const messagesEndRef: any = useRef(null);
    const scrollToBottom = () => { messagesEndRef.current.scrollIntoView({ behavior: "smooth" }) }
    useEffect(scrollToBottom, [props])
    useEffect(() => {
        props.getMessageById(props.location.state)
    }, [])
    if (props.message && props.message.length > 0) {

        return (
            <div className="chat-page">
                <Header />
                <div className="chat-page__box-content">
                    {
                        props.message && props.message.length > 0 && props.message.map((val: any, i: any) => {
                            return (
                                <div className={`chat-page__box-content--${val.useId === props.useId ? "user" : "friend"}`} key={i}>
                                    <div className="avatar">
                                        <div className="avatar__img">
                                            <img src={"https://hinhanhdep.vn/wp-content/uploads/2019/11/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-b%C3%ACnh-minh-s%E1%BB%9Bm-mai-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-47.jpg"} alt="" />
                                            <span><p></p></span>
                                        </div>
                                    </div>
                                    <div className="message">
                                        <div className="message__content">{val.message}</div>
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
                            <input type="text" placeholder="Aa" onChange={_handelChange} name="message" />
                            <i className="fas fa-smile"></i>
                        </div>
                    </div>
                    <div className="chat-page__bottom-bar--like-btn">
                        <i className="fas fa-thumbs-up" onClick={_handelSubmit}></i>
                    </div>
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
}

const mapStateToProps = (state: any) => {
    return {
        message: state.chatReducer.data,
        useId: state.authReducers.userID,
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        getMessageById
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)