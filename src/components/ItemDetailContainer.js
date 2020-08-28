import React, {useState, useEffect} from 'react';
import Item from './Item';
import ItemDetailLayout from './ItemDetailLayout';

function ItemDetailContainer({id}) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {      
        Item().then(res => {
            let filteredRes = res.filter( (p) => p.id === id )
            setProduct(filteredRes[0]); 
            setLoading(false);
            console.log('Mounted ItemDetailContainer')
            return () => {
                console.log('Dismounted ItemDetailContainer')
            }                                                     
        });     
    }, [id]);
    
    return (
        <>
            { loading && <p className="text-center" style={{marginTop: '10px', marginBottom: '10px'}}>Cargando detalle del producto...</p> }
            
            { !loading && <ItemDetailLayout
                key={product.id}
                src={product.img}
                name={product.name}
                price={product.price}
                description={product.description}
                category={product.categoryId}
                linkId={`/categories/${product.categoryId}`}                   
            />}
        </>
    )
}

export default ItemDetailContainer;