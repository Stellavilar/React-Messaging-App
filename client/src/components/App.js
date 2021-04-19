import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';
import Dashboard from './Dashboard';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';

function App() {
  //Get new id thanks to useLocalStorage function
  const [ id, setId ] = useLocalStorage('id');

const dashboard = (
  //Dashboard has to be included in Provider to share some data and update it (contacts, conversations, socket)
  <SocketProvider id={id}>
    <ContactsProvider>
      <ConversationsProvider>
          <Dashboard id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
  </SocketProvider>
  
);

  return (
    //If there is an id saved into the localStorage, show the dashboard, if not show the login form
    <>
      {id ? dashboard : <Login getId={setId} />  }
    </>
  );
};

export default App;
