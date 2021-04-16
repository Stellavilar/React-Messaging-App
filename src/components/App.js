import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';
import Dashboard from './Dashboard';
import { ContactsProvider } from '../contexts/ContactsProvider';

function App() {
  //Get new id thanks to useLocalStorage function
  const [ id, setId ] = useLocalStorage('id');

const dashboard = (
  //Dashboard has to be included in Provider to share some data and update it (contacts, conversations)
  <ContactsProvider>
    <Dashboard id={id}/>
  </ContactsProvider>
);

  return (
    //If there is an id saved into the localStorage, show the dashboard, if not show the login form
    <>
      {id ? dashboard : <Login getId={setId} /> }
    </>
  );
};

export default App;
