import React from 'react';
import { Conversation } from './../api';
import { conversionByIdConverter } from './../utils';

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
        let modifiedData = conversionByIdConverter(response.data);
        setSubConv(modifiedData);
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