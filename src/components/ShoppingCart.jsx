import styles from "../styles/ShoppingCart.module.css";

export default function ShoppingCart() {
  return (
    <div className={styles.shopping_cart}>
      <h3>Your Cart</h3>
      <div>Cart Empty</div>
      <div className={styles.buttons_container}>
        <button>Check Out</button>
        <button>Close</button>
      </div>
    </div>
  );
}
