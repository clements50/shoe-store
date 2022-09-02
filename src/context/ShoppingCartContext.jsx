import { createContext, useState, useId } from "react";
import { ShopItems } from "../data/ShopItems";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartActive, setCartActive] = useState(false);
  const [cart, setCart] = useState([]);

  const cartHandler = () => {
    cartActive === false ? setCartActive(true) : setCartActive(false);
  };

  const shopItems = ShopItems.map((item) => {
    return { ...item, id: useId() };
  });

  const addToCart = (id) => {
    setCart((prev) => {
      const itemInCart = prev.some((item) => item.id === id);
      if (!itemInCart) return [...prev, { id: id, quantity: 1 }];
      if (itemInCart) {
        const updatedCart = prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return updatedCart;
      }
    });
  };

  const removeItemFromCart = () => {
    setCart((prev) => {
      let item = prev.filter((item) => item.quantity > 0);
      return item;
    });
  };

  const decrementCart = (id) => {
    setCart((prev) => {
      const updateItem = prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      return updateItem;
    });
    removeItemFromCart();
  };

  const totalItemsInCart = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartActive,
        setCartActive,
        cartHandler,
        shopItems,
        addToCart,
        totalItemsInCart,
        cart,
        decrementCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
