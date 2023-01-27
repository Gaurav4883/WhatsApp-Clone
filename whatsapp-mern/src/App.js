import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react';
import axios from './axios';


function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //fetching initial information
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data)
    })

  }, [])


  useEffect(() => {
    const pusher = new Pusher('63b17bf132a3fe0cdba6', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
