import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function NavBar (){
    return(
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-black font-weight-bold">Tô de Olho</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon text"></span>
                    <i class="fas fa-bars text-black"></i>
                </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/cadastro">Cadastrar</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/escrever">Registro</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Login </Link></li>  
            </ul>
        </div>
        </nav>
    )
}

export default NavBar;