import { createContext, useId, useState } from "react";
import items from "../data/ShopItems.json";

export const ShoppingCartContext = createContext([]);

export const ShoppingCartProvider = ({ children }) => {
  const [cartActive, setCartActive] = useState(false);

  const shopItems = items.map((item) => {
    return { ...item, id: useId() };
  });

  const cartHandler = () => {
    cartActive === false ? setCartActive(true) : setCartActive(false);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shopItems, cartActive, setCartActive, cartHandler }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
