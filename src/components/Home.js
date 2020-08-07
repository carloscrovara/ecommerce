import React from 'react';

function Home({ greeting }) {
    const homeStyle = {
        backgroundColor: '#009688',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }    

    return (
        <header style={homeStyle}>
            <div className="starter-template text-center py-5 px-3">
                <h1>{greeting}</h1>
                <p className="lead">In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt
                <br />
                moderatius contentiones nec no. Nam et puto abhorreant scripserit, et cum inimicus accusamus.</p>
            </div>
        </header>
    )
}

export default Home;