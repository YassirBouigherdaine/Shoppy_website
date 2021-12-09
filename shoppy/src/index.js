import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
import Context from './components/context/Context';


ReactDOM.render(<BrowserRouter><Context><App /></Context></BrowserRouter>, document.getElementById('root'));


