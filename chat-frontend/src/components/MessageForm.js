// src/components/MessageForm.js
import React, { useState } from 'react';

const MessageForm = ({ sendMessage }) => {
    const [content, setContent] = useState('');
    const [sender, setSender] = useState('Gabriel');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(sender, content);
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <label>
                Sender:
                <select value={sender} onChange={(e) => setSender(e.target.value)}>
                    <option value="Gabriel">Gabriel</option>
                    <option value="Sam">Sam</option>
                </select>
            </label>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter your message"
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageForm;
