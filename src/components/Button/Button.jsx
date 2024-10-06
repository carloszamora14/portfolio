import { HashLink as Link } from 'react-router-hash-link';
import styles from './Button.module.css';

function Button({ children, to, scrollOffset }) {
  return (
    <div className={styles.wrapper}>
      <Link smooth to={to} className={styles.button} scroll={scrollOffset}>
        {children}
      </Link>
    </div>
  );
}

export default Button;
