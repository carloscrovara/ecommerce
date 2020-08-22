import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetailLayout ({ id, category, src, name, price, description, linkId }) {
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
                                <h2>{name}</h2>    
                                <h3 style={{marginTop: '0px', color: '#FF7044' }}>$ {price}</h3>
                                <dl className="item-property" style={{backgroundColor: '#F5F5F5'}}>     
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

                <Link className="btn btn-info" to={linkId} style={{ marginBottom: '5px', marginTop: '25px'}}>Volver al listado de {category}</Link>        
            
            </div>
        </>
    )
}