import React, { Component, useState, useRef, useEffect } from 'react'

export default function BoxContent() {
    const messagesEndRef = useRef(null)
    return (
        <div className="chat-page__box-content">
            <div className="chat-page__box-content--friend">
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
            <div className="chat-page__box-content--user">
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
            <div ref={messagesEndRef} />
        </div>
    )
}
