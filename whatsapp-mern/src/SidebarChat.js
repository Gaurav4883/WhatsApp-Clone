import { Avatar } from '@mui/material'
import React from 'react'
import './SiderbarChat.css'

function SidebarChat() {
    return <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
            <h3>Room name</h3>
            <p>Last message</p>
        </div>
    </div>
}

export default SidebarChat