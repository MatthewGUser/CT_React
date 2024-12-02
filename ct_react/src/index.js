import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional if you have global styles
import App from './App';  // Importing the main App component

// Rendering the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
