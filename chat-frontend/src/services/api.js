import axios from 'axios';

const API_URL = 'https://chatapp-git-main-gabomaya26s-projects.vercel.app/api/messages/'; // Cambia el puerto si es necesario

export const sendMessage = async (messageData) => {
    try {
        const response = await axios.post(API_URL, messageData);
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error.response.data);
        throw error; // Propaga el error para que pueda ser manejado más arriba
    }
};

export const fetchMessages = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error.response.data);
        throw error; // Propaga el error para que pueda ser manejado más arriba
    }
};
