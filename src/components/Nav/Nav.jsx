import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import useScrollOffset from '../../hooks/useScrollOffset';
import useActiveSectionContext from '../../hooks/useActiveSectionContext';
import useHeaderRefContext from '../../hooks/useHeaderRefContext';
import navigationLinks from '../../data/navigationLinks';
import styles from './Nav.module.css';

function Nav() {
  const { pathname } = useLocation();
  const headerRef = useHeaderRefContext();
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
              scroll={el =>
                scrollOffset(
                  link.id === 'contact' ? null : el,
                  pathname === '/' ? headerRef : null,
                )
              }
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
