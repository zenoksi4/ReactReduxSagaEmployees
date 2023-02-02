import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { Provider } from "react-redux";
import store from 'store';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);


