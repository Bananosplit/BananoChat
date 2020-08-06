import React from 'react'
import './app-header.css'

import ChatListSide from'./chat-list-side/chat-list-side'
import MessageSide from './message-side/message-side'

export default function AppHeader () {
    return (
        <div className = "app-header">
            <ChatListSide/>
            <MessageSide/>

        </div>
    )
}