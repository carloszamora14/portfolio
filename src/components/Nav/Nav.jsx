import styles from './Nav.module.css';
import { sections } from '../../data/sections.js';

function Nav() {
  return (
    <ul className={styles.navList}>
      {sections.map((section, index) => (
        <li className={styles.menuItem} key={section.name}>
          <a href={section.url} className={styles.menuLink}>
            <span className={styles.number} aria-hidden="true">
              {String(index).padStart(2, '0')}.
            </span>
            <span>{section.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
