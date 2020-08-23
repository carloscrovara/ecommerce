import React from 'react';

export default function CartBrief() {
    return (
        <>
            <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Tu pedido</span>
                    <span className="badge badge-secondary badge-pill">2</span>
                </h4>
                <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Primer producto</h6>
                            <small className="text-muted">Cantidad: 1</small>
                        </div>
                        <span className="text-muted">$ 600</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Segundo producto</h6>
                            <small className="text-muted">Cantidad: 1</small>
                        </div>
                        <span className="text-muted">$ 800</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total</span>
                        <strong>$ 1.400</strong>
                    </li>
                </ul>
            </div>   
        </>
    )
}
