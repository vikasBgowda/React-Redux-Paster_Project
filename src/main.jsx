import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <App />
    <Toaster/>
  </StrictMode>
  </Provider>
)
