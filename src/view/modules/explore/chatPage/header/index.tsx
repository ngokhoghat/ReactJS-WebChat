import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';

export default function Header() {
    let history = useHistory();
    return (
        <div className="chat-page__header">
            <div className="chat-page__header--title">
                <i className="fas fa-arrow-left" onClick={() => { history.goBack() }} />
                <div className="name">Team chinh chiến</div>
            </div>
            <div className="chat-page__header--info">
                <i className="fas fa-info-circle"></i>
            </div>
        </div>
    )
}
