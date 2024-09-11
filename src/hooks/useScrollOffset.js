import { useCallback } from 'react';

function useScrollOffset() {
  return useCallback(el => {
    const navbar = document.querySelector('.pageNavbar');
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
