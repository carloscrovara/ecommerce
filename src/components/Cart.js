import React from 'react';
import CartForm from './CartForm';
import CartBrief from './CartBrief';

function Cart() {
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