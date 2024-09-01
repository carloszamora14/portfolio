import { useRef, useEffect } from 'react';

function useFocusTrap(isActive, onClose) {
  const firstElementRef = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {
    if (isActive) {

      const handleKeyDown = evt => {
        if (evt.key === 'Tab') {
          if (evt.shiftKey) {
            if (document.activeElement === firstElementRef.current) {
              evt.prevtDefault();
              lastElementRef.current.focus();
            }
          } else {
            if (document.activeElement === lastElementRef.current) {
              evt.preventDefault();
              firstElementRef.current.focus();
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
