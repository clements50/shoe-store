import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "../components/Hamburger";
import styles from "../styles/Navbar.module.css";

export default function Navbar(props) {
  const { hamburgerClickHandler, navMenuActive } = props;

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_flex__container}>
        <h3>Shoes Clues</h3>
        <ul className={` ${styles.nav_menu} ${navMenuActive && styles.active}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">shop</Link>
          </li>
        </ul>
        <div className={styles.navbar_flex__container2}>
          <FontAwesomeIcon className={styles.bag_icon} icon={faBagShopping} />
          <Hamburger
            hamburgerClickHandler={hamburgerClickHandler}
            navMenuActive={navMenuActive}
          />
        </div>
      </div>
    </div>
  );
}
