import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatContainer from "./ChatContainer";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ChatContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
