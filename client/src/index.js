import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'

const rootReactElement = () => {
  return (
       <App />
  );

};

const target = document.getElementById('root');
render(rootReactElement(), target);

