import { createContext, useState } from "react";

export const WeddingCartContext = createContext();
export const WeddingCartProvider = ({ children }) => {
  const [weddingCart, setWeddingCart] = useState([]);

  const addToWeddingCart = (product) => {
    setWeddingCart([...weddingCart, product]);
  };

  const removeFromWeddingCart = (id) => {
    const newCart = weddingCart.filter((itemToStay) => itemToStay.id !== id);
    setWeddingCart(newCart);
  };

  return (
    <WeddingCartContext.Provider
      value={{ weddingCart, addToWeddingCart, removeFromWeddingCart }}
    >
      {children}
    </WeddingCartContext.Provider>
  );
};
