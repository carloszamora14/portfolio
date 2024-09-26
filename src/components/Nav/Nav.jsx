import { HashLink as Link } from 'react-router-hash-link';
import navigationLinks from '../../data/navigationLinks';
import styles from './Nav.module.css';
import useScrollOffset from '../../hooks/useScrollOffset';
import useActiveSectionContext from '../../hooks/useActiveSectionContext';

function Nav() {
  const scrollOffset = useScrollOffset();
  const activeSection = useActiveSectionContext();

  return (
    <nav aria-label="Main navigation">
      <ul className={styles.navList}>
        {navigationLinks.map(link => (
          <li key={link.name}>
            <Link
              smooth
              to={link.url}
              className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
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
