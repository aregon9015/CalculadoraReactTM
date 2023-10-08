import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; // Ajusta la ruta según la ubicación real de "App.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
