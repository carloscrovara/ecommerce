import React from 'react';

export default function ItemList({ products }) {
    return (
        <>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="text-center row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {products.map((p, idx) => 
                            <div className="col" style={{ paddingBottom: '20px'}} key={p.id}> 
                                <div className="card shadow-sm">
                                    <img src={p.img} className="card-img-top" style={{ height: '320px'}} alt="product"></img>
                                    <div className="card-body">
                                        <h2 className="card-title" id={p.id}>{p.name}</h2>
                                        <div className="text-center"> 
                                            <h3 className="card-title pricing-card-title" style={{ color: '#ff7043'}}>$ {p.price}</h3>
                                            <a href="#product" 
                                                className="btn btn-success" 
                                                onClick={function masInfo() {console.log("Va a página con el detalle del producto " + p.name)}}
                                            >
                                                Más información
                                            </a>
                                        </div>
                                    </div>                 
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}