import { useState } from 'react';
import styles from './Tooltip.module.css';

function Tooltip({ heading, text, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const visible = isHovered || isFocused;

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex="0"
      aria-describedby={`Tooltip-${text}`}
    >
      {children}
      <div
        className={`${styles.tooltip} ${visible ? styles.visible : ''}`}
        id={`Tooltip-${text}`}
        role="tooltip"
        aria-hidden={!visible}
      >
        <p className={styles.heading}>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.circle}
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          {heading}
        </p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default Tooltip;
