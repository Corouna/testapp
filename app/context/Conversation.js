import React from 'react';
import { Conversation } from './../api';

export const ConversationContext = React.createContext();

const ConversationState = () => {
    const [conv, setConv] = React.useState([]);
    const [subConv, setSubConv] = React.useState(null);

    const getAll = async () => {
        let response = await Conversation.getAllConversation();
        setConv(response.data);
    }

    const getByID = async (id) => {
        let response = await Conversation.getConversationById(id);
        setSubConv(response.data);
    }

    const clearSubConv = () => {
        setSubConv(null);
    }

    React.useEffect(() => {
        getAll();
    }, []);

    return { conv, subConv, getAll, getByID, clearSubConv };
}

export const ConversationProvider = ({ children }) => {
    return (
        <ConversationContext.Provider value={ConversationState()}>{children}</ConversationContext.Provider>
    )
}