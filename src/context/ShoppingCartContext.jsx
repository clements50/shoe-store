import { createContext, useId, useState } from "react";
import items from "../data/ShopItems.json";

export const ShoppingCartContext = createContext([]);

export const ShoppingCartProvider = ({ children }) => {
  const shopItems = items.map((item) => {
    return { ...item, id: useId() };
  });

  return (
    <ShoppingCartContext.Provider value={{ shopItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
