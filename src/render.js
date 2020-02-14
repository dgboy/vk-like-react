import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addMessage, updateNewMessage } from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
    </BrowserRouter>, document.getElementById('root')
  );
};
