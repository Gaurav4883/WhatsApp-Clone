import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material'
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src="https://scontent.fktm17-1.fna.fbcdn.net/v/t1.6435-9/125882834_842699796463726_5870249940632091905_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=d1vwWTJJMEoAX_sQr6C&_nc_ht=scontent.fktm17-1.fna&oh=00_AfCzcPsvp97RvVYxkqnfWvGuXEgGcFctLMLa-DO-CdBYvg&oe=63F85FFB" />
                <div className="sidebar__rightheader">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton >
                        <ChatIcon />
                    </IconButton >
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder='search or start a new chat' />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat name="Hamro Bazar" kura="55,000 matra ? " />
                <SidebarChat name="4-5 Class" kura="Join Zoom fast !" />
                <SidebarChat name="Animesh Nepal" kura="Girlfriend ne ko banauxa yaar xya " />
            </div>
        </div>
    )
}

export default Sidebar