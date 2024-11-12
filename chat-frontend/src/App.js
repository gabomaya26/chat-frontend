import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import { fetchMessages, sendMessage } from './services/api';

const App = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessages = async () => {
            const fetchedMessages = await fetchMessages();
            setMessages(fetchedMessages);
        };
        getMessages();
    }, []);

    const handleSendMessage = async (content, sender) => {
        const newMessage = { sender, content };
        await sendMessage(newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <div className="app">
            <h1>Chat entre Gabriel y Sam</h1>
            <div className="chat-container">
                <ChatWindow
                    messages={messages}
                    sendMessage={(content) => handleSendMessage(content, 'Gabriel')}
                    userName="Gabriel"
                />
                <ChatWindow
                    messages={messages}
                    sendMessage={(content) => handleSendMessage(content, 'Sam')}
                    userName="Sam"
                />
            </div>
        </div>
    );
};

export default App;
