import { HashLink as Link } from 'react-router-hash-link';
import useHeaderRefContext from '../../hooks/useHeaderRefContext';
import useScrollOffset from '../../hooks/useScrollOffset';
import styles from './Logo.module.css';

function Logo() {
  const headerRef = useHeaderRefContext();
  const scrollOffset = useScrollOffset();

  return (
    <Link
      smooth
      to="/#home"
      aria-label="Home"
      className={styles.logo}
      scroll={el => scrollOffset(el, headerRef)}
    >
      <div className={styles.iconWrapper} aria-hidden="true">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 20 20"
              className={styles.star}
              style={{ '--index': index }}
            >
              <path d="M10 0 C10.5 10, 15 9.5, 20 10 C15 10.5, 10 11.5, 10 20 C10 11.5, 5 10.5, 0 10 C5 9.5, 9.5 10, 10 0 Z" />
            </svg>
          ))}
      </div>
      <span className={styles.logoText}>Cz</span>
    </Link>
  );
}

export default Logo;
