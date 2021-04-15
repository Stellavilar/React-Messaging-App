import React, { useState } from 'react';
import Login from './Login';

function App() {
  //Get new id
  const [ id, setId ] = useState();

  return (
    <>
      {id}
      <Login getId={setId} />
    </>
  );
};

export default App;
