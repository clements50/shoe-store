import { createContext, useState, useId } from "react";
import { ShopItems } from "../data/ShopItems";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartActive, setCartActive] = useState(false);

  const cartHandler = () => {
    cartActive === false ? setCartActive(true) : setCartActive(false);
  };

  const shopItems = ShopItems.map((item) => {
    return { ...item, id: useId() };
  });

  return (
    <CartContext.Provider
      value={{ cartActive, setCartActive, cartHandler, shopItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
