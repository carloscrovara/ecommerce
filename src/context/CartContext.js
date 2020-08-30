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

  function CounterCart () {
    const total = list.reduce(
      (prevValue, currentValue) => prevValue + currentValue.itemQuantity,
      0
    );
    return <span className="badge badge-secondary badge-pill"> {total} </span>;
  };
  

  return <CartContext.Provider value={{ list, addItem, cleanList, sumar, restar, itemQuantity, onItemQuantityChange, CounterCart }}>
    {children}
  </CartContext.Provider>
} 