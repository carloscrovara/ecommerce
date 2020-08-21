import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home greeting="¡Bienvenidos a Tortas Ugita!" />
          </Route>
          <Route path="/about">
            <About />
          </Route>            
          <Route path="/item/:id">
            <ItemDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>                       
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;