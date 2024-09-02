import { useRef, useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';
import styles from './NavMobile.module.css';
import useFocusTrap from '../../hooks/useTrapFocus';

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const { firstElementRef, lastElementRef } = useFocusTrap(isOpen, () =>
    setIsOpen(false),
  );

  const handleMouseOver = evt => {
    const index = evt.currentTarget.dataset['index'];
    console.log(index);
    const nav = navRef.current;
    nav.style.setProperty('--index', index);
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

      <aside className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
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
              <li
                className={styles.menuItem}
                data-index="0"
                onMouseOver={handleMouseOver}
              >
                <a href="#home" tabIndex={isOpen ? 0 : -1}>
                  <span className={styles.number} aria-hidden="true">
                    01
                  </span>
                  <span>Home</span>
                </a>
              </li>
              <li
                className={styles.menuItem}
                data-index="1"
                onMouseOver={handleMouseOver}
              >
                <a href="#projects" tabIndex={isOpen ? 0 : -1}>
                  <span className={styles.number} aria-hidden="true">
                    02
                  </span>
                  <span>Projects</span>
                </a>
              </li>
              <li
                className={styles.menuItem}
                data-index="2"
                onMouseOver={handleMouseOver}
              >
                <a href="#about" tabIndex={isOpen ? 0 : -1}>
                  <span className={styles.number} aria-hidden="true">
                    03
                  </span>
                  <span>About</span>
                </a>
              </li>
              <li
                className={styles.menuItem}
                data-index="3"
                onMouseOver={handleMouseOver}
              >
                <a
                  href="#contact"
                  tabIndex={isOpen ? 0 : -1}
                  ref={lastElementRef}
                >
                  <span className={styles.number} aria-hidden="true">
                    04
                  </span>
                  <span>Contact</span>
                </a>
              </li>
            </ul>

            <div className={styles.gradient} aria-hidden="true"></div>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default NavMobile;
