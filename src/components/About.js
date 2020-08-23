import React from 'react';

function About() {
    const containerBienvenida = {
        backgroundColor: '#009688',
        color: 'white'        
    }
    const containerText = {
        paddingRight: '15px',
        paddingLeft: '15px'     
    }    

    return (       
        <>
            <section className="text-center" style={containerBienvenida}>
                <div className="row py-lg-3">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="font-weight-light">Quiénes Somos</h1>
                    </div>
                </div>
            </section>
            <section className="text-center" style={{ paddingTop: '14px' }}>
                <div className="row py-lg-3" style={containerText}>
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <p className="lead">
                            Tortas Ugita es un emprendimiento de María Eugenia Recoulat Vaccaro, joven que realizó diversos cursos de pastelería y que disfruta de hacer tortas y tartas artesanales a pedido. 
                        </p>
                        <p className="lead">
                            Este emprendimiento surgió en el año 2015 como un trabajo complementario de Eugenia, que también es docente de Lengua y Literatura en varios colegios.
                        </p>
                    </div>
                </div>                               
            </section>         
        </>
    )
}

export default About;