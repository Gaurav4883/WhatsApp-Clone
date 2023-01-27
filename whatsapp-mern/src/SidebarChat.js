import { Avatar } from '@mui/material'
import React from 'react'
import './SiderbarChat.css'

function SidebarChat(props) {
    return <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
            <h3>{props.name}</h3>
            <p>{props.kura}</p>
        </div>
    </div>
}

export default SidebarChat