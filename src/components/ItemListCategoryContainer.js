import React, {useState, useEffect} from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

function ItemListCategoryLayout({ id, category, src, name, price, linkId }) {
    return (
        <>
            <div className="col" style={{ paddingBottom: "20px" }} key={id} category={category}>
                <div className="card shadow-sm">
                    <Link to={linkId}> 
                        <img src={src} className="card-img-top" style={{ height: "320px" }} alt="product"/>
                    </Link>    
                    <div className="card-body">
                        <Link class="text-decoration-none" to={linkId}>
                            <h2 className="card-title" style={{ color: "black" }}>{name}</h2>
                        </Link>    
                        <div className="text-center">
                            <Link class="text-decoration-none" to={linkId}>
                                <h3 className="card-title pricing-card-title" style={{ color: "#ff7043" }}>$ {price}</h3>
                            </Link>    
                            <Link className="btn btn-success" to={linkId}>Más información</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

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
                            <ItemListCategoryLayout
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