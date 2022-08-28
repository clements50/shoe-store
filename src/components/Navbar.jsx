import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "../components/Hamburger";
import styles from "../styles/Navbar.module.css";

export default function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_flex__container}>
        <h3>Shoes Clues</h3>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Shop">shop</Link>
        </ul>
        <div className={styles.navbar_flex__container2}>
          <FontAwesomeIcon icon={faBagShopping} />
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
