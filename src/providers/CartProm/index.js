import { createContext, useState } from "react";

export const PromCartContext = createContext();
export const PromCartProvider = ({ children }) => {
  const [promCart, setPromCart] = useState([]);

  const addToPromCart = (product) => {
    setPromCart([...promCart, product]);
  };

  const removeFromPromCart = (id) => {
    const newCart = promCart.filter((item) => item.id !== id);
    console.log("oi");
    console.log(id);
    return setPromCart(newCart);
  };

  return (
    <PromCartContext.Provider
      value={{ promCart, addToPromCart, removeFromPromCart }}
    >
      {children}
    </PromCartContext.Provider>
  );
};
