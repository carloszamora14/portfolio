import { useState, useEffect } from 'react';

function useElementHeight(elementRef) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const element = elementRef.current;
      const elementHeight = element ? element.offsetHeight : 0;
      setHeight(elementHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [elementRef]);

  return height;
}

export default useElementHeight;
