import { useContext } from "react";
import styles from "../styles/ShoppingCart.module.css";
import { CartContext } from "../context/ShoppingCartContext.jsx";

export default function ShoppingCart() {
  const { cartHandler, cartActive } = useContext(CartContext);

  return (
    <div className={`${styles.shopping_cart} ${cartActive && styles.active}`}>
      <h2>Your Cart</h2>
      <div>Cart Empty</div>
      <div>Total $20</div>
      <div className={styles.buttons_container}>
        <button>Check Out</button>
        <button onClick={cartHandler}>Close</button>
      </div>
    </div>
  );
}
