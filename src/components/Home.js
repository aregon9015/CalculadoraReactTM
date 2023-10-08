import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <h1>Bienvenido a Mi Aplicación</h1>
            <p>Una aplicación para realizar cálculos matemáticos.</p>
            <Link to="/calculadora">
                <button>Comenzar</button>
            </Link>
        </div>
    );
}

export default Home;
