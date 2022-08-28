import styles from "../styles/Hamburger.module.css";

export default function Hamburger(props) {
  const { navMenuHandler, navMenuActive } = props;

  return (
    <div
      className={`${styles.hamburger} ${navMenuActive && styles.active}`}
      onClick={navMenuHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
