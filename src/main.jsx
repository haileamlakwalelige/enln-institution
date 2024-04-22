import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from './store/store.js';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <ToastContainer />
          <App />
        </Provider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
