import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
//Use context is used to share some global data between several components
//createContext is used to create an object. The Provider allows the components to be updated
const ContactsContext = React.createContext();

export function useContacts() {
    //This function will be exported to NewContactsModal 
    return useContext(ContactsContext)
};

export function ContactsProvider({ children }) {

    const [ contacts, setContacts ] = useLocalStorage('contacts', [])

    function createContact(id, name) {
        setContacts(prevContacts => {
            return [...prevContacts, { id, name }]
        });
    };

    return (
        <ContactsContext.Provider value={{ contacts, createContact }} >
            {children}
        </ContactsContext.Provider>
    );
};
