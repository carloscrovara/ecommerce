import React from "react";

function ItemListLayout({ id, src, name, price, masInfo }) {
    return (
        <>
            <div className="col" style={{ paddingBottom: "20px" }} key={id}>
                <div className="card shadow-sm">
                    <img src={src} className="card-img-top" style={{ height: "320px" }} alt="product"/>
                    <div className="card-body">
                        <h2 className="card-title" id={id}>{name}</h2>
                        <div className="text-center">
                            <h3 className="card-title pricing-card-title" style={{ color: "#ff7043" }}>$ {price}</h3>
                            <a href="#product"className="btn btn-success" onClick={masInfo}>Más información</a>
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
                                id={p.id}
                                name={p.name}
                                price={p.price}
                                masInfo={function masInfo() {
                                    console.log("Va a página con el detalle del producto " + p.name)
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}