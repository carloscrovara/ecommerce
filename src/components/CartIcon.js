import React from 'react';

function CartIcon() {
    return (
        <>
            <ul className="navbar-nav mr-auto">
                <li>
                    <a className="nav-link" href="#carrito">
                        <ion-icon name="cart" style={{ fontSize: 25 }}></ion-icon> 
                    </a>
                </li>
            </ul>
        </>
    )
}

export default CartIcon;