import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  //Get new id thanks to useLocalStorage function
  const [ id, setId ] = useLocalStorage('id');
  return (
    <>
      {id ? <Dashboard id={id}/> : <Login getId={setId} /> }
    </>
  );
};

export default App;
