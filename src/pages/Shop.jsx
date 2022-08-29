import styles from "../styles/Shop.module.css";
import ShopItem from "../components/ShopItem";

export default function Shop() {
  return (
    <div className={styles.shop}>
      <h1>Shop Items</h1>
      <ShopItem />
    </div>
  );
}
