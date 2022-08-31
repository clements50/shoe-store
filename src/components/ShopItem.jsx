import styles from "../styles/ShopItem.module.css";

export default function ShopItem({ name, id, price, image }) {
  return (
    <div className={styles.item_container}>
      <div className={styles.image_container}>
        <img src={image} />
      </div>
      <div className={styles.price_container}>Price ${price}</div>
      <button>Add To Cart</button>
    </div>
  );
}
