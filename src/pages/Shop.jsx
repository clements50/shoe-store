import styles from "../styles/Shop.module.css";
import ShopItem from "../components/ShopItem";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

export default function Shop() {
  const { shopItems } = useContext(CartContext);

  return (
    <div className={styles.shop}>
      <h1>Shop Items</h1>
      <div className={styles.items_section}>
        {shopItems.map((item) => {
          return (
            <ShopItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
