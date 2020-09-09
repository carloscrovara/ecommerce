import React, {useState, useEffect} from 'react';
import ItemDetailLayout from './ItemDetailLayout';
import { getFirestore } from '..//firebase';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id = undefined } = useParams();   
    
    useEffect(() => {
        const db = getFirestore();
    
        const itemCollection = db.collection('items');
        const product = itemCollection.doc(id)
    
        product.get().then((doc) => {
            if(!doc.exists) {
                console.log('Item does not exist');
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
            
            { !loading && <ItemDetailLayout
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