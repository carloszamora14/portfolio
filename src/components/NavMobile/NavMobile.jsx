import { useRef, useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';
import useFocusTrap from '../../hooks/useTrapFocus';
import { navigationLinks } from '../../data/navigationLinks';
import styles from './NavMobile.module.css';

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const { firstElementRef, lastElementRef } = useFocusTrap(isOpen, () =>
    setIsOpen(false),
  );

  const handleMouseOver = evt => {
    const index = evt.currentTarget.dataset['index'];
    const nav = navRef.current;
    nav.style.setProperty('--hovered-index', index);
  };

  return (
    <div className={styles.navMobile}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.openButton}
        aria-label="Toggle menu"
      >
        <RiMenu2Line />
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}>
        <div>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.closeButton}
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
            ref={firstElementRef}
          >
            <IoCloseOutline />
          </button>

          <nav ref={navRef} className={styles.nav}>
            <ul className={styles.navList}>
              {navigationLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={styles.navItem}
                  data-index={index}
                  onMouseOver={handleMouseOver}
                >
                  <a
                    href={link.url}
                    className={styles.itemLink}
                    tabIndex={isOpen ? 0 : -1}
                    ref={
                      index === navigationLinks.length - 1
                        ? lastElementRef
                        : null
                    }
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.gradientBackground} aria-hidden="true"></div>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default NavMobile;
