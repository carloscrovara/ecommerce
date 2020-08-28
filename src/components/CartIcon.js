import React from 'react';
import { Link } from 'react-router-dom';
import { useListContext } from '../context/CartContext';

function CartIcon() {
    const { quantity } = useListContext();      
    return (
        <>
            <ul className="navbar-nav mr-auto">
                <li>
                    <Link className="nav-link" to={`/cart`}>
                        <ion-icon name="cart" style={{ fontSize: 25 }}></ion-icon> 
                        <span className="badge badge-secondary badge-pill">{quantity}</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default CartIcon;