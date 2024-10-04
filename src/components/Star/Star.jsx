import useMouseTilt from '../../hooks/useMouseTilt';
import styles from './Star.module.css';

function Star({ containerClassName, animating = true }) {
  const { containerRef, handleMouseMove } = useMouseTilt();

  return (
    <div
      className={`${styles.container} ${containerClassName}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 20 20"
        className={`${styles.star} ${animating ? styles.animating : ''}`}
      >
        <path
          d="M10 0
           C10.5 10, 15 9.5, 20 10
           C15 10.5, 10 11.5, 10 20
           C10 11.5, 5 10.5, 0 10
           C5 9.5, 9.5 10, 10 0 Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default Star;
