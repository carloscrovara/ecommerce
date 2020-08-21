import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import logo from '../assets/logo.png';

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to={`/`}>
                    <img src={logo} style={{ height: 80 }} alt="logo"/>
                </Link>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/about`}>Quiénes Somos</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a  
                                className="nav-link dropdown-toggle" 
                                href="#categories" 
                                id="navbarDropdown" 
                                role="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false"
                            >
                                Productos
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#tortas">Tortas</a>
                                    <a className="dropdown-item" href="#tartas">Tartas</a>
                                </div>
                        </li>
                    </ul>
                    <div>
                        <CartIcon />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;