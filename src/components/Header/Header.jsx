import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavMobile from '../NavMobile/NavMobile';
import styles from './Header.module.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.headerWrapper} container`}>
        <Logo />
        <Nav />
        <NavMobile />
      </div>
    </header>
  );
}

export default Header;
