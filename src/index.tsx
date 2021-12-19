import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './contexts/reducer';

ReactDOM.render(
  <ToastProvider autoDismissTimeout={3000} placement="top-right">
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </ToastProvider>,
  document.getElementById('root')
);
