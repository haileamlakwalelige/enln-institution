import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import { Provider } from "react-redux";
import store from './store/store.js';
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
        <Provider store={store}>
        <ToastContainer />
          <App />
        </Provider>
    </Router>
  </React.StrictMode>
);

