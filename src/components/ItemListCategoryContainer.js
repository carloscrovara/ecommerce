import React, {useState, useEffect} from 'react';
import ItemListLayout from './ItemListLayout';
import { getFirestore } from '..//firebase';
import { useParams } from "react-router-dom";

function ItemListCategoryContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId = undefined } = useParams();   

    useEffect(() => {
        //Firebase
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const categoryItems = itemCollection.where('categoryId', '==', categoryId)

        categoryItems.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No results');
            }
            setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))); 
        }).catch((error) => {
            console.log('Error searching items', error);
        }).finally(() => {
            setLoading(false); 
        })
            console.log('Mounted ItemListCategoryContainer')
            return () => {
                console.log('Dismounted ItemListCategoryContainer')
            }
    }, [categoryId]);    
    
    return (
        <>
            { loading && <p className="text-center" style={{marginTop: '10px', marginBottom: '10px'}}>Cargando listado de la categoría {categoryId}...</p> }

            { !loading && <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="text-center row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">           
                            {products.map(product =>  (
                                <ItemListLayout
                                    key={product.id}
                                    category={product.categoryId}
                                    src={product.img}
                                    name={product.name}
                                    price={product.price}
                                    linkId={`/item/${product.id}`}
                                />                
                            ))}
                        </div> 
                    </div>
            </div>}
        </>
    )
}

export default ItemListCategoryContainer;