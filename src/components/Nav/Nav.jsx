import { HashLink as Link } from 'react-router-hash-link';
import navigationLinks from '../../data/navigationLinks';
import styles from './Nav.module.css';
import useScrollOffset from '../../hooks/useScrollOffset';

function Nav({ activeSection }) {
  const scrollOffset = useScrollOffset();

  return (
    <nav aria-label="Main navigation">
      <ul className={styles.navList}>
        {navigationLinks.map(link => (
          <li key={link.name}>
            <Link
              smooth
              to={link.url}
              className={`${styles.navLink} ${activeSection === link.url.substring(2) ? styles.active : ''}`}
              scroll={scrollOffset}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
