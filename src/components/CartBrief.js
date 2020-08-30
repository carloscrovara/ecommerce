import React from 'react';
import { useListContext } from '../context/CartContext';

export default function CartBrief() {
    const { list, cleanList, quantity } = useListContext();

    let totalPrice = 0;

    return (
        <>
            <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Tu pedido</span>
                    <span className="badge badge-secondary badge-pill"> {quantity} </span>
                </h4>
                <ul className="list-group mb-3">
                    {list.map((i, idx) => ( 
                        <li key={i.id} className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">{i.name}</h6>
                                <small className="text-muted">Cantidad: {i.itemQuantity}</small>
                            </div>
                            <span className="text-muted">$ {i.price * i.itemQuantity}</span>
                        </li>
                    ))}
                    <li className="list-group-item d-flex justify-content-between">
                        <strong>Total</strong>
                        {list.map ( (i) => (
                            <strong>$ {totalPrice += i.price * i.itemQuantity }</strong>
                        ))}

                    </li>
                </ul>
                <button className="btn btn-success" style={{ marginBottom: '10px' }} onClick={cleanList}>Eliminar pedido</button>
            </div>        
        </>
    )
}