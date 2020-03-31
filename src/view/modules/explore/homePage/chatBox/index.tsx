import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './style.scss'
import firebase from '../../../../firebase'

const ChatBox = ({ data, user }: any) => {
    let history = useHistory();
    const [state, setstate]: any = useState({
        data: []
    })
    useEffect(() => {
        const idUser = data.map((val: any) => val.user_id.filter((v: any, i: any) => v != user.id).toString());
        firebase.firestore().collection('users').where("id", "in", idUser).get().then(res => {
            const data: any = [];
            res.forEach((val) => {
                data.push(val.data())
            })
            setstate({ data })
        })
    }, [])
    return (
        <div className="chat-box">
            {
                state.data.length > 0 && data.map((item: any, index: any) => {
                    return (
                        <div
                            className="chat-box__element"
                            onClick={() => { history.push("/chat", item.id) }}
                            key={index}
                        >
                            <div className="chat-box__element--avatar">
                                <div className="avatar">
                                    <div className="avatar__img">
                                        <img src={item.img != "" ? item.img : state.data[index].img} alt="" />
                                        <span><p></p></span>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-box__element--old-message">
                                <div className="name">{item.name != "" ? item.name : state.data[index].name}</div>
                                <div className="old-massage">Trung: Hello guy</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        user: state.userReducers.userReducer.data.user,
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)