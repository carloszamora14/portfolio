import { useCallback } from 'react';

function useScrollOffset() {
  return useCallback((el, headerRef) => {
    const navbar = headerRef.current;
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);
}

export default useScrollOffset;
