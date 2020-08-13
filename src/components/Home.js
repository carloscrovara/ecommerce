import React from 'react';

function Home({ greeting }) {
    const containerBienvenida = {
        backgroundColor: '#009688',
        color: 'white'        
    }     
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
        </>
    )
}

export default Home;