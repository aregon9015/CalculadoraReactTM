// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes en lugar de Switch
import Calculator from './Calculator';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Usa el componente Routes en lugar de Switch */}
          <Route path="/calculadora" element={<Calculator />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
