import React, {useState, useEffect} from 'react';
import Item from './Item';
import ItemListLayout from './ItemListLayout';

function ItemListCategoryContainer({categoryId}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        console.log('App mounted')   
        Item().then(res => {
            setProducts(res); 
            setLoading(false);                           
        });
        return function cleanup() {
            console.log("cleaned up");
        };     
    }, [categoryId]);
    
    return (
        <>

            { loading && <p className="text-center" style={{marginTop: '10px', marginBottom: '10px'}}>Cargando listado de la categoría {categoryId}...</p> }

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="text-center row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">           
                        {products.filter((p, idx) => p.categoryId === categoryId).map(product =>  (
                            <ItemListLayout
                                key={product.id}
                                categoryId={product.categoryId}
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

export default ItemListCategoryContainer;