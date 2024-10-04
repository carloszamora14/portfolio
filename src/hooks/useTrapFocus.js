import { useRef, useEffect } from 'react';

function useFocusTrap(isActive, onClose) {
  const firstElementRef = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {
    const firstElement = firstElementRef.current;
    const lastElement = lastElementRef.current;
    if (!firstElement || !lastElement) return;

    if (isActive) {
      const handleKeyDown = evt => {
        if (evt.key === 'Tab') {
          if (evt.shiftKey) {
            if (document.activeElement === firstElement) {
              evt.prevtDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              evt.preventDefault();
              firstElement.focus();
            }
          }
        } else if (evt.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isActive, onClose]);

  return { firstElementRef, lastElementRef };
}

export default useFocusTrap;
