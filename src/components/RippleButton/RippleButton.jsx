import { Link } from 'react-router-dom';
import styles from './RippleButton.module.css';

function RippleButton({ children, href, ...rest }) {
  const createRipple = evt => {
    const button = evt.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${evt.clientX - rect.left - radius}px`;
    circle.style.top = `${evt.clientY - rect.top - radius}px`;

    circle.classList.add(styles.ripple);

    const ripples = button.getElementsByClassName(styles.ripple);

    if (ripples.length > 0) {
      Array.from(ripples).forEach(ripple => ripple.remove());
    }

    button.appendChild(circle);
  };

  const Component = href ? 'a' : Link;

  return (
    <Component
      className={styles.button}
      onClick={createRipple}
      href={href}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default RippleButton;
