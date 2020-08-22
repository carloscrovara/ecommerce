import React from "react";
import { Link } from 'react-router-dom';

function ItemListLayout({ id, src, name, price, linkId }) {
    return (
        <>
            <div className="col" style={{ paddingBottom: "20px" }} key={id}>
                <div className="card shadow-sm">
                    <Link to={linkId}> 
                        <img src={src} className="card-img-top" style={{ height: "320px" }} alt="product"/>
                    </Link>    
                    <div className="card-body">
                        <Link class="text-decoration-none" to={linkId}>
                            <h2 className="card-title" style={{ color: "black" }}>{name}</h2>
                        </Link>    
                        <div className="text-center">
                            <Link class="text-decoration-none" to={linkId}>
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

export default function ItemList({ products }) {
    return (
        <>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="text-center row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {products.map((p, idx) => (
                            <ItemListLayout
                                key={p.id}
                                src={p.img}
                                name={p.name}
                                price={p.price}
                                linkId={`/item/${p.id}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}