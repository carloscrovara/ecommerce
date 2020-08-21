import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import Item from './Item';

function Home({greeting}) {
    const containerBienvenida = {
        backgroundColor: '#009688',
        color: 'white'        
    }
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log('App mounted')
        Item().then(res => {
            setProducts(res); // Set state -> Render
            setLoading(false); // Set state -> Render                     
        });
        return function cleanup() {
            console.log("cleaned up");
        };  
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
            <ItemList products={products}/>
            </>
        )
}

export default Home;