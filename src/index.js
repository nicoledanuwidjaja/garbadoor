import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Nav />
        <App />
    </BrowserRouter>
), document.getElementById('root'));