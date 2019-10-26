import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    // root component for application as Router child
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));