import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import About from './components/About';
import ItemListCategory from './components/ItemListCategory';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { ListProvider } from './context/CartContext';

function App() {
  return (
    <>
        <ListProvider value={[]} initialValueItem={1} maxValueItem={30} minValueItem={1}>    
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
              <Route path="/categories/:categoryId">
                <ItemListCategory />
              </Route>          
              <Route path="/cart">
                <Cart />
              </Route>                       
            </Switch>
            <Footer />
          </BrowserRouter>
        </ListProvider>
    </>
  )
}

export default App;