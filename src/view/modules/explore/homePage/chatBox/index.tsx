import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './style.scss'
import LoaddingComponent from '../../../components/loading/LoaddingComponent'

const ChatBox = ({ data, useId }: any) => {
    let history = useHistory();
    return (
        <div className="chat-box">
            {
                data.length > 0 ? data.map((item: any, index: any) => {
                    let userImg = item.user_id.filter((val: any) => val.id != useId);
                    return (
                        <div
                            className="chat-box__element"
                            onClick={() => { history.push("/chat", item.id) }}
                            key={index}
                        >
                            <div className="chat-box__element--avatar">
                                <div className="avatar">
                                    <div className="avatar__img">
                                        <img src={item.img == "" ? userImg[0].img : item.img} alt="" />
                                        <span><p></p></span>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-box__element--old-message">
                                <div className="name">{item.name !== "" ? item.name : ""}</div>
                                <div className="old-massage">Trung: Hello guy</div>
                            </div>
                        </div>
                    )
                }) : <LoaddingComponent />
            }
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        useId: state.authReducers.userID,
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
    },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)