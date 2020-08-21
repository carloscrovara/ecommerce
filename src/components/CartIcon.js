import React from 'react';
import { Link } from 'react-router-dom';

function CartIcon() {
    return (
        <>
            <ul className="navbar-nav mr-auto">
                <li>
                    <Link className="nav-link" to={`/cart`}>
                        <ion-icon name="cart" style={{ fontSize: 25 }}></ion-icon> 
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default CartIcon;