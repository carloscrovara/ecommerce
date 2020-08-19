import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import Item from './Item';

function ItemDetailLayout ({ id, src, name, price, description }) {
    return (
        <>
            <div className="container text-center" style={{ marginTop: '30px', marginBottom: '30px'}} key={id}>
                <div className="card">
                    <div className="row">
                        <aside className="col-sm-5 border-right">
                            <div className="col-xs-4 item-photo" style={{paddingTop: '20px'}}>
                                <img src={src} style={{height: '300px', width: '300px'}} alt="product"/>
                            </div>
                        </aside>
                        <aside className="col-sm-6">    
                            <div className="col-xs-5" style={{paddingTop: '20px'}}>
                                <h2 id={id}>{name}</h2>    
                                <h3 style={{marginTop: '0px', color: '#ff7044' }}>$ {price}</h3>
                                <dl className="item-property" style={{backgroundColor: '#f5f5f5'}}>     
                                    <dd>
                                        <p style={{ padding: '10px'}}>{description}</p>
                                    </dd>
                                </dl>
                                <hr />
                                <ItemCount 
                                    initial={1} 
                                    min={1} 
                                    max={20} 
                                    onAdd={function onAdd() {
                                        console.log("Se agregó al carrito " + name)
                                    }} 
                                />        
                            </div> 
                        </aside> 
                    </div>
                </div>        
            </div>
        </>
    )
}

function ItemDetailContainer({ valueIdItem }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Item().then(res => {
            setProducts(res); 
            setLoading(false);
    });
    }, []);     
    return (
        <>
            { loading && <p className="text-center" style={{marginTop: '10px', marginBottom: '10px'}}>Cargando detalle de producto...</p> }
            
            {products.filter((p, idx) => p.id === valueIdItem).map(filteredProduct =>  (
                <ItemDetailLayout
                    key={filteredProduct.id}
                    src={filteredProduct.img}
                    id={filteredProduct.id}
                    name={filteredProduct.name}
                    price={filteredProduct.price}
                    description={filteredProduct.description}                    
                />
            ))}  
        </>
    )
}

export default ItemDetailContainer;