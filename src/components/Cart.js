import React from 'react';
import CartForm from './CartForm';
import CartBrief from './CartBrief';
import { Link } from 'react-router-dom';
import { useListContext } from '../context/CartContext';

function Cart() {
    const { quantity } = useListContext();   

    if(quantity === 0) {
        return (
            <>
                <div className="container">
                    <div className="py-5 text-center">
                        <h2>Tu carrito de compras <ion-icon name="cart" style={{ fontSize: 25 }}></ion-icon> está vacío.</h2>
                        <Link 
                            className="btn btn-success" 
                            to={`/`} 
                            style={{ marginBottom: '5px', marginTop: '25px'}}
                        >
                            Volver a Home para comprar
                        </Link>                        
                    </div>
                </div>                    
            </>
        )
    }
    return (
        <>
            <div className="container">
                <div className="py-5 text-center">
                    <h2>Checkout</h2>
                    <p className="lead">
                        Chequéa tu pedido y completá el formulario con tus datos para confirmar la compra.
                    </p>
                </div>
                <div className="row g-3">
                    <CartBrief />
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Completá tus datos</h4>
                        <CartForm />
                    </div>
                </div>
            </div>                        
        </>
    )
}

export default Cart;