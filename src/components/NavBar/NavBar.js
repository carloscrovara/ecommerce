import React from 'react';
import "./NavBar.css";

function NavBar() {
    return <div className="Contenedor-nav">
                <nav>
                    <ul>
                        <li>
                            <a className="Links" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="Links" href="#categories">Categorías</a>
                        </li>
                        <li>
                            <a className="Links" href="#products">Productos</a>
                        </li>
                        <li>
                            <a className="Links" href="#shop">Carrito</a>
                        </li>
                    </ul>
                </nav>
            </div>
}

export default NavBar;