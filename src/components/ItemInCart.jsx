import { useContext } from "react";
import styles from "../styles/ItemInCart.module.css";
import { CartContext } from "../context/ShoppingCartContext";

export default function ItemInCart({ name, image, price, id, quantity }) {
  const { addToCart, decrementCart } = useContext(CartContext);
  const itemTotalPrice = price * quantity;

  const incrementHandler = () => {
    addToCart(id);
  };

  const decrementHandler = () => {
    decrementCart(id);
  };

  return (
    <div className={styles.item_container}>
      <div className={styles.img_container}>
        <img src={image} />
      </div>
      <div className={styles.item_info_container}>
        <h4>{name}</h4>
        <div>${itemTotalPrice.toFixed(2)}</div>
        <div className={styles.increment_container}>
          <button onClick={decrementHandler}>-</button>
          <div>{quantity}</div>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </div>
  );
}
