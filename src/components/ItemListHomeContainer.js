import React from "react";
import ItemListLayout from './ItemListLayout';

export default function ItemListHomeContainer ({ products }) { 
    return (
        <>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="text-center row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">           
                        {products.map(product =>  (
                            <ItemListLayout
                                key={product.id}
                                mainproduct={product.mainProduct}
                                category={product.categoryId}
                                src={product.img}
                                name={product.name}
                                price={product.price}
                                linkId={`/item/${product.id}`}
                            />                
                        ))}
                    </div> 
                </div>
            </div>
        </>
    )
}