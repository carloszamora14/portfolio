import styles from './Logo.module.css';

const colors = ['#C0EA70', 'var(--blue)', '#CD6B7A'];

function Logo() {
  return (
    <a href="#home" aria-label="Home" className={styles.logo}>
      <div className={styles.iconWrapper} aria-hidden="true">
        {colors.map((color, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 20 20"
            style={{ '--index': index }}
            className={styles.star}
          >
            <path
              d="M10 0
                 C10.5 10, 15 9.5, 20 10
                 C15 10.5, 10 11.5, 10 20
                 C10 11.5, 5 10.5, 0 10
                 C5 9.5, 9.5 10, 10 0 Z"
              fill={color}
            />
          </svg>
        ))}
      </div>
      <span className={styles.logoText}>Cz</span>
    </a>
  );
}

export default Logo;
