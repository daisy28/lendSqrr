import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import "./fonts/AvenirNextLTPro-Regular.otf";
import "./fonts/SF-Compact-Display-Regular.ttf";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
