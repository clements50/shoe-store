import { useContext } from "react";
import styles from "../styles/ShopItem.module.css";
import { CartContext } from "../context/ShoppingCartContext";

export default function ShopItem({ name, id, price, image }) {
  const { addToCart } = useContext(CartContext);

  const btnClickHandler = () => {
    addToCart(id);
  };

  return (
    <div className={styles.item_container}>
      <div className={styles.image_container}>
        <img src={image} />
      </div>
      <h4>{name}</h4>
      <div className={styles.price_container}>Price ${price}</div>
      <button onClick={btnClickHandler}>Add To Cart</button>
    </div>
  );
}
