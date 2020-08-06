import React from 'react'
import './message-side.css'

export default function MessageSide() {
    return (
        <div className = "message-side">
            <div className = "name-chat">Name chat</div>
            <div className = "status">online</div>
            <div className = "set-block">
                <div className = "search"><i class="fas fa-search"></i></div>
                <div className = "setting-chat"><i class="fas fa-ellipsis-v"></i></div>
            </div>
        </div>
    )
}