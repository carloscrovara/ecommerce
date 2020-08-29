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
  };

  function cleanList() {
    setList([]);
  }

  return <CartContext.Provider value={{ list, addItem, quantity: list.length, cleanList, sumar, restar, itemQuantity, onItemQuantityChange }}>
    {children}
  </CartContext.Provider>
} 