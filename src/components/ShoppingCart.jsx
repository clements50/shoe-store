import { useContext } from "react";
import styles from "../styles/ShoppingCart.module.css";
import ItemInCart from "../components/ItemInCart";
import { CartContext } from "../context/ShoppingCartContext.jsx";

export default function ShoppingCart() {
  const { cartHandler, cartActive, cart, shopItems } = useContext(CartContext);

  const itemsInCart = cart.map((item) => {
    const itemInCart = shopItems.find(
      (itemInCart) => item.id === itemInCart.id
    );

    return { ...itemInCart, quantity: item.quantity };
  });

  const cartTotal = itemsInCart.reduce((acc, item) => {
    return item.price * item.quantity + acc;
  }, 0);

  return (
    <div className={`${styles.shopping_cart} ${cartActive && styles.active}`}>
      <h1>Your Shopping Cart</h1>
      <div className={styles.cart_items__container}>
        {itemsInCart.map((item) => {
          return (
            <ItemInCart
              name={item.name}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </div>
      <div className={styles.container}>
        <h2>Total ${cartTotal.toFixed(2)}</h2>
        <div className={styles.buttons_container}>
          <button>Check Out</button>
          <button onClick={cartHandler}>Close</button>
        </div>
      </div>
    </div>
  );
}
