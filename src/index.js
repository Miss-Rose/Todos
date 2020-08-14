import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app";
import AppR from './todoWithRedux/components/app';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(

    <div>
        <App/>
        <AppR/>
    </div>,
    document.getElementById('root')
);

