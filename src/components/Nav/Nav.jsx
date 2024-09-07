import { navigationLinks } from '../../data/navigationLinks';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul className={styles.navList}>
        {navigationLinks.map(link => (
          <li key={link.name}>
            <a href={link.url} className={styles.navLink}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
