import React, { Component } from 'react'

export default function BottomBar() {
    return (
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
                <i className="fas fa-thumbs-up"></i>
            </div>
        </div>
    )
}
