import styles from "../styles/Hamburger.module.css";

export default function Hamburger(props) {
  const { hamburgerClickHandler, navMenuActive } = props;

  return (
    <div
      className={`${styles.hamburger} ${navMenuActive && styles.active}`}
      onClick={hamburgerClickHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
