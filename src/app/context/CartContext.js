'use client';

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let flag=0;
    cart.map(item=>{if(item===product){flag=1}});
    if(!flag){
    setCart((prevCart) => [...prevCart, product]);
    }
  };

  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== name));
  };
  const deleteFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id === id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
