// src/components/Chat.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatBox from './ChatBox';
import MessageForm from './MessageForm';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await axios.get('https://chatapp-git-main-gabomaya26s-projects.vercel.app/api/messages/');
            setMessages(response.data);
        };
        fetchMessages();
    }, []);

    const sendMessage = async (sender, content) => {
        const response = await axios.post('https://chatapp-git-main-gabomaya26s-projects.vercel.app/api/messages/', { sender, content });
        setMessages([...messages, response.data]);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ChatBox messages={messages.filter(msg => msg.sender === 'Gabriel')} title="Gabriel's Chat" />
            <ChatBox messages={messages.filter(msg => msg.sender === 'Sam')} title="Sam's Chat" />
            <MessageForm sendMessage={sendMessage} />
        </div>
    );
};

export default Chat;
