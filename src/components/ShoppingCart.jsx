import styles from "../styles/ShoppingCart.module.css";
import { useState, useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export default function ShoppingCart(props) {
  const { cartActive, cartHandler } = useContext(ShoppingCartContext);

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
