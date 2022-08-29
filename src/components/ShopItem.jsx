import styles from "../styles/ShopItem.module.css";

export default function ShopItem() {
  return (
    <div className={styles.item_container}>
      <div className={styles.image_container}></div>
      <div className={styles.price_container}>Price</div>
      <button>Add To Cart</button>
    </div>
  );
}
