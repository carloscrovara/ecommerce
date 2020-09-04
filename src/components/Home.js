import React, {useState, useEffect} from 'react';
import ItemListHomeContainer from './ItemListHomeContainer';
import { getFirestore } from '..//firebase';

function Home({greeting}) {
    const containerBienvenida = {
        backgroundColor: '#009688',
        color: 'white'        
    }
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        //Firebase
        const db = getFirestore();

        const itemCollection = db.collection('items');
        const priceItems = itemCollection.where('price', '>', 1000).limit(6);

        priceItems.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No existen items de mas de 1000 pesos')
            }
            setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))); 
        }).catch((error) => {
            console.log('Error searching items', error);
        }).finally(() => {
            setLoading(false); 
        })              
            console.log('Mounted Home')
            return () => {
                console.log('Dismounted Home')
            }
    }, []);

    return (
        <>
            <section className="text-center" style={containerBienvenida}>
                <div className="row py-lg-3">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="font-weight-light">{greeting}</h1>
                        <p className="lead">Productos artesanales al mejor precio y calidad.</p>
                    </div>
                </div>
            </section>

            { loading && <p className="text-center" style={{marginTop: '10px', marginBottom: '10px'}}>Cargando listado de productos destacados...</p> }
            
            { !loading && <ItemListHomeContainer products={products}/> }
        </>
    )
}

export default Home;