import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, sendNewMessage, addMessage} from './redux/state';
import {BrowserRouter} from "react-router-dom";

export let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} 
            addPost={addPost} 
            updateNewPostText={updateNewPostText} 
            sendNewMessage={sendNewMessage}
            addMessage={addMessage}
            />
        </BrowserRouter>, document.getElementById('root'));
}