import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/global.css';


ReactDOM.render(
  <React.StrictMode>
    <Landing />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

 
