import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <>
      <NavBar />
      <Home greeting="¡Bienvenidos a la Tienda de Carlos!"/>
    </>
  );
}

export default App;