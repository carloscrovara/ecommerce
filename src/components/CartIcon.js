import React from 'react';
import { Link } from 'react-router-dom';
import { useListContext } from '../context/CartContext';

function CartIcon() {
    const { CounterCart } = useListContext();      
    
    return (
        <>
            <ul className="navbar-nav mr-auto">
                <li>
                    <Link className="nav-link" to={`/cart`}>
                        <ion-icon name="cart" style={{ fontSize: 25 }}></ion-icon>
                        <CounterCart />
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default CartIcon;