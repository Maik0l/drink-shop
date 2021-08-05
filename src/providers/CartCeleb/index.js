import { createContext, useState } from "react";

export const CelebCartContext = createContext();
export const CelebCartProvider = ({ children }) => {
  const [cartCeleb, setCartCeleb] = useState([]);

  const addToCartCeleb = (product) => {
    setCartCeleb([...cartCeleb, product]);
  };

  const removeFromCartCeleb = (id) => {
    const newCart = cartCeleb.filter((item) => item.id !== id);

    setCartCeleb(newCart);
  };

  return (
    <CelebCartContext.Provider
      value={{ cartCeleb, removeFromCartCeleb, addToCartCeleb }}
    >
      {children}
    </CelebCartContext.Provider>
  );
};
