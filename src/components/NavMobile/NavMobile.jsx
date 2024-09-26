import { useRef, useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { RiMenu2Line } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';
import useFocusTrap from '../../hooks/useTrapFocus';
import useScrollOffset from '../../hooks/useScrollOffset';
import useActiveSectionContext from '../../hooks/useActiveSectionContext';
import navigationLinks from '../../data/navigationLinks';
import styles from './NavMobile.module.css';

function NavMobile() {
  const navRef = useRef(null);
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const scrollOffset = useScrollOffset();
  const activeSection = useActiveSectionContext;
  const { firstElementRef, lastElementRef } = useFocusTrap(isOpen, () =>
    setIsOpen(false),
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const stopScrollPropagation = evt => {
      const { scrollTop, scrollHeight, clientHeight } = sidebar;

      if (
        (evt.deltaY < 0 && scrollTop === 0) ||
        (evt.deltaY > 0 && scrollTop + clientHeight === scrollHeight)
      ) {
        evt.preventDefault();
      }
    };

    if (isOpen) {
      sidebar.addEventListener('wheel', stopScrollPropagation, {
        passive: false,
      });
      sidebar.addEventListener('touchmove', stopScrollPropagation, {
        passive: false,
      });
    }

    return () => {
      sidebar.removeEventListener('wheel', stopScrollPropagation);
      sidebar.removeEventListener('touchmove', stopScrollPropagation);
    };
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
        <div>
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
            <ul className={styles.navList}>
              {navigationLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={styles.navItem}
                  data-index={index}
                  style={{ '--index': index }}
                  onMouseOver={handleMouseOver}
                  onClick={handleClose}
                >
                  <Link
                    smooth
                    to={link.url}
                    className={`${styles.itemLink} ${activeSection === link.id ? styles.active : ''}`}
                    tabIndex={isOpen ? 0 : -1}
                    ref={
                      index === navigationLinks.length - 1
                        ? lastElementRef
                        : null
                    }
                    scroll={scrollOffset}
                  >
                    {link.name}
                  </Link>
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
