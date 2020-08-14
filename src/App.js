import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  //function onAdd() {
    //console.log("Se agregó el producto al carrito")
  //}
  return (
    <>
      <NavBar />
      <Home greeting="¡Bienvenidos a Tortas Ugita!" />  
      <Footer />
    </>
  )
}

export default App;