import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useListContext = () => useContext(CartContext);

export function ListProvider({ value, initialValueItem, maxValueItem, minValueItem, children }) {
  const [list, setList] = useState(value || []);
  const [itemQuantity, setItemQuantity] = useState(initialValueItem);

  function sumar() {
      if(itemQuantity < maxValueItem){
        setItemQuantity(itemQuantity + 1);
      }else{
        console.log('Máximo alcanzado');
      }
  }

  function restar() {
      if(itemQuantity > minValueItem){
        setItemQuantity(itemQuantity - 1);
      }else{
        console.log('Mínimo alcanzado');
      }        
  }

  function onItemQuantityChange(event) {
    setItemQuantity(event.target.value)
  }  

  function addItem(newItem) {
    const l = [...list, newItem];
    setList(l);
    setItemQuantity(initialValueItem);
  };

  function cleanList() {
    setList([]); 
  }

  function getCartTotal(lista) {
    let total = 0;
    lista.map ( (i) => total += i.itemQuantity )
    return total
  }

  function getCartTotalPrice(lista) {
    let total = 0;
    lista.map ( (i) => total += i.price * i.itemQuantity )
    return total
  }
  
  //Prueba
  //function getCartSubtotalPrice(lista) {
    //return lista.reduce((prev, next) => 
    //(prev + (next.i.itemQuantity * next.i.price)), 0)
  //}
  
  return <CartContext.Provider value={{ list, addItem, quantity: getCartTotal(list), cleanList, sumar, restar, itemQuantity, onItemQuantityChange, totalPrice: getCartTotalPrice(list) }}>
    {children}
  </CartContext.Provider>
} 