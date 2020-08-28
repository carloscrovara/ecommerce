import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useListContext = () => useContext(CartContext);

export function ListProvider({ value, children }) {
  const [list, setList] = useState(value || []);

  function addItem(newItem) {
      const l = [...list, newItem];
      setList(l);
  };

  function cleanList() {
    setList([]);
  }

  return <CartContext.Provider value={{ list, addItem, quantity: list.length, cleanList }}>
    {children}
  </CartContext.Provider>
} 