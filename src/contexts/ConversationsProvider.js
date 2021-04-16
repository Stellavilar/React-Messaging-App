import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
//Use context is used to share some global data between several components
//createContext is used to create an object. The Provider allows the components to be updated
const ConversationsContext = React.createContext();

export function useConversations() {
    //This function will be exported to NewContactsModal 
    return useContext(ConversationsContext)
};

export function ConversationsProvider({ children }) {

    const [ conversations, setConversations ] = useLocalStorage('conversations', [])

    function createConversations(recipients) {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }]
        });
    };

    return (
        <ConversationsContext.Provider value={{ conversations, createConversations }} >
            {children}
        </ConversationsContext.Provider>
    );
};
