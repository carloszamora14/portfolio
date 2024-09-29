import { useCallback } from 'react';

function useScrollOffset() {
  return useCallback((el, headerRef) => {
    setTimeout(() => {
      const navbarHeight = headerRef?.current?.offsetHeight || 0;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 16;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }, 0);
  }, []);
}

export default useScrollOffset;
