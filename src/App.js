import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Home greeting="¡Bienvenidos a Tortas Ugita!" />
      <ItemDetail />
      <Footer />
    </>
  )
}

export default App;