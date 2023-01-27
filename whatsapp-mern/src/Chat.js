import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './Chat.css'
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios"

function Chat({ messages }) {
    const [input, setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new',
            {
                message: input,
                name: "demo app",
                timestamp: "6:00",
                received: true,
            }
        )
        setInput("");
        const messagesContainer = document.querySelector('.chat__body');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h4>Priyanka Shah</h4>
                    <p>Active Now</p>
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
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"} `}>
                        <span className='chat__name' >{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}

            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Type a Message' />
                    <button onClick={sendMessage} type='submit' >Send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat