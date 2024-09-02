import styles from './Nav.module.css';

function Nav() {
  return (
    <ul className={styles.navList}>
      <li className={styles.menuItem}>
        <a href="#home">
          <span className={styles.number} aria-hidden="true">
            01
          </span>
          <span>Home</span>
        </a>
      </li>
      <li className={styles.menuItem}>
        <a href="#projects">
          <span className={styles.number} aria-hidden="true">
            02
          </span>
          <span>Projects</span>
        </a>
      </li>
      <li className={styles.menuItem}>
        <a href="#about">
          <span className={styles.number} aria-hidden="true">
            03
          </span>
          <span>About</span>
        </a>
      </li>
      <li className={styles.menuItem}>
        <a href="#contact">
          <span className={styles.number} aria-hidden="true">
            04
          </span>
          <span>Contact</span>
        </a>
      </li>
    </ul>
  );
}

export default Nav;
