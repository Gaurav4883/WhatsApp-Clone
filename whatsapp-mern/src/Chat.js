import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chat.css'
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h4>Room name</h4>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>
            </div>
            <div className="chat__body">
                <p className='chat__message'>
                    <span className='chat__name' >Kamal</span>
                    K cha oe Ishaan ?
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className=' chat__message chat__receiver'>
                    <span className='chat__name' >Ishaan</span>
                    Sab thik cha, tero van
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className='chat__message'>
                    <span className='chat__name' >Kamal</span>
                    Yestai ho yaar k hunu
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text" placeholder='Type a Message' />
                    <button type='submit'>Send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat