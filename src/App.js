import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemCount from './components/ItemCount';
import Footer from './components/Footer';

function App() {
  function onAdd() {
    console.log("Se agregó el producto al carrito")
  }
  return (
    <>
      <NavBar />
      <Home greeting="¡Bienvenidos a Tortas Ugita!" />  
      <ItemCount 
        initial={1} 
        min={1} 
        max={20}
        onAdd={onAdd} 
      />  
      <Footer />
    </>
  )
}

export default App;