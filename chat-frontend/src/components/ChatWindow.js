import React, { useEffect, useRef } from 'react';
import './ChatWindow.css';

const ChatWindow = ({ messages, sendMessage }) => {
    const messagesEndRef = useRef(null); // Ref para el final de la lista de mensajes

    useEffect(() => {
        // Desplaza hacia el final del contenedor de mensajes
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]); // Solo se ejecuta cuando se agregan mensajes

    const handleSend = (event) => {
        event.preventDefault();
        const messageInput = event.target.elements.message;
        sendMessage(messageInput.value);
        messageInput.value = ''; // Limpia el campo de entrada
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.sender === 'Gabriel' ? 'sent' : 'received'}`}
                    >
                        <strong>{message.sender}: </strong>
                        {message.content}
                    </div>
                ))}
                {/* Este div vacío se utiliza para el desplazamiento */}
                <div ref={messagesEndRef} />
            </div>
            <form className="message-form" onSubmit={handleSend}>
                <input type="text" name="message" placeholder="Escribe un mensaje..." required />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ChatWindow;
