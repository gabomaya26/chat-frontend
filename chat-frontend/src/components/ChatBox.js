// src/components/ChatBox.js
import React from 'react';

const ChatBox = ({ messages, title }) => (
    <div style={{ width: '45%', border: '1px solid #ccc', padding: '10px' }}>
        <h3>{title}</h3>
        <div>
            {messages.map(msg => (
                <p key={msg.id}><strong>{msg.sender}:</strong> {msg.content}</p>
            ))}
        </div>
    </div>
);

export default ChatBox;
