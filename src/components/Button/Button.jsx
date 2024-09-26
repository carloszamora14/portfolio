import { HashLink as Link } from 'react-router-hash-link';
import useScrollOffset from '../../hooks/useScrollOffset';
import styles from './Button.module.css';

function Button({ children, to }) {
  const scrollOffset = useScrollOffset();

  return (
    <Link smooth to={to} className={styles.button} scroll={scrollOffset}>
      {children}
    </Link>
  );
}

export default Button;
