import React, { Component } from 'react'

import './style.scss'
import Header from './header'
import BoxContent from './boxContent'
import BottomBar from './bottomBar'

export default function ChatPage() {
    return (
        <div className="chat-page">
            <Header />
            <BoxContent />
            <BottomBar />
        </div>
    )
}
