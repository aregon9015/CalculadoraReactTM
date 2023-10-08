// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="calculator">
            <h1>Bienvenido a la Calculadora</h1>
            <p>Esta es la pantalla principal. Haz clic en el botón de abajo para ir a la calculadora:</p>
            <Link to="/calculadora">
                <button>Iniciar Calculadora</button>
            </Link>
        </div>
    );
}

export default Home;
