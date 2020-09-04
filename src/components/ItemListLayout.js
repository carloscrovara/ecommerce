import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemListLayout({ id, category, src, name, price, linkId }) {
    return (
        <>
            <div className="col" style={{ paddingBottom: "20px" }} key={id} category={category}>
                <div className="card shadow-sm">
                    <Link to={linkId}> 
                        <img src={src} className="card-img-top" style={{ height: "320px" }} alt="product"/>
                    </Link>    
                    <div className="card-body">
                        <Link className="text-decoration-none" to={linkId}>
                            <h2 className="card-title" style={{ color: "black" }}>{name}</h2>
                        </Link>    
                        <div className="text-center">
                            <Link className="text-decoration-none" to={linkId}>
                                <h3 className="card-title pricing-card-title" style={{ color: "#ff7043" }}>$ {price}</h3>
                            </Link>    
                            <Link className="btn btn-success" to={linkId}>Más información</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}