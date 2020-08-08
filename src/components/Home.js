import React from 'react';

function Home({ greeting }) {
    const containerBienvenida = {
        backgroundColor: '#009688',
    }
    
    const textStyle = {
        fontWeight:'bold', 
        color: 'white',
        paddingTop:'10px', 
        paddingBottom:'10px'
    }

    return (
        <>
            <div className="starter-template text-center" style={containerBienvenida}>
                <p style={textStyle}> {greeting} </p>
            </div>
        </>
    )
}

export default Home;