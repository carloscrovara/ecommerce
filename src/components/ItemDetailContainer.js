import React, {useState, useEffect} from 'react';
import ItemDetailLayout from './ItemDetailLayout';
import {Link } from 'react-router-dom';
import {getFirestore} from '..//firebase';
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemNotFound, setItemNotFound] = useState(false);
    const { id = undefined } = useParams();   
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const product = itemCollection.doc(id)
    
        product.get().then((doc) => {
            if(!doc.exists) {
                setItemNotFound(true);
                return;
            }
            console.log('Item found');
            setProduct( {id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log('Error searching items', error);
        }).finally(() => { 
            setLoading(false);
        });     
            console.log('ItemDetailContainer')
            return () => {
                console.log('ItemDetailContainer')
            }
    }, [id]); 
    
    return (
        <>
            { loading && <p className="text-center" style={{marginTop: '10px', marginBottom: '10px'}}>Cargando detalle del producto...</p> }
            
            { itemNotFound && <div className="container">
                    <div className="py-5 text-center">
                        <h2>El producto no existe en nuestra Tienda de E-commerce.</h2>
                        <Link className="btn btn-success" to={`/`} style={{ marginBottom: '5px', marginTop: '25px'}}>Volver a Home para seleccionar otro producto</Link>                        
                    </div>
                </div> 
            }
            { !loading && !itemNotFound && <ItemDetailLayout
                key={product.id}
                id={product.id}
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