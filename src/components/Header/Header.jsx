import Nav from '../Nav/Nav';
import NavMobile from '../NavMobile/NavMobile';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={`${styles.headerWrapper} container`}>
        <a href="/">Carlos Zamora</a>
        <Nav />
        <NavMobile />
      </div>
    </header>
  );
}

export default Header;
