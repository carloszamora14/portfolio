import { useRef, useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { RiMenu2Line } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';
import useFocusTrap from '../../hooks/useTrapFocus';
import useScrollOffset from '../../hooks/useScrollOffset';
import useActiveSectionContext from '../../hooks/useActiveSectionContext';
import useHeaderRefContext from '../../hooks/useHeaderRefContext';
import navigationLinks from '../../data/navigationLinks';
import styles from './NavMobile.module.css';

function NavMobile() {
  const navRef = useRef(null);
  const sidebarRef = useRef(null);
  const headerRef = useHeaderRefContext();
  const activeSection = useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);
  const scrollOffset = useScrollOffset();
  const { firstElementRef, lastElementRef } = useFocusTrap(isOpen, () =>
    setIsOpen(false),
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      const remInPixels = 48 * rootFontSize;

      if (window.innerWidth >= remInPixels) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    const scrollbarWidth = window.innerWidth - body.clientWidth;

    if (isOpen) {
      const scrollY = window.scrollY;

      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
      body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        body.style.paddingRight = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

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

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}
        ref={sidebarRef}
      >
        <div className={styles.sidebarContent}>
          <button
            onClick={handleClose}
            className={styles.closeButton}
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
            ref={firstElementRef}
          >
            <IoCloseOutline />
          </button>

          <nav ref={navRef} className={styles.nav}>
            <div className={styles.gradientBackground} aria-hidden="true" />

            <ul className={styles.navList}>
              {navigationLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={styles.navItem}
                  data-index={index}
                  style={{ '--index': index }}
                  onMouseOver={handleMouseOver}
                >
                  <Link
                    smooth
                    to={link.url}
                    onClick={handleClose}
                    className={`${styles.itemLink} ${activeSection === link.id ? styles.active : ''}`}
                    tabIndex={isOpen ? 0 : -1}
                    ref={
                      index === navigationLinks.length - 1
                        ? lastElementRef
                        : null
                    }
                    scroll={el => scrollOffset(el, headerRef)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default NavMobile;
