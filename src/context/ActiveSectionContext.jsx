import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ActiveSectionContext = createContext(undefined);

function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;

      const sections = document.querySelectorAll('section[id], footer[id]');
      let lastSection;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(section.id);
        }
        lastSection = section;
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setActiveSection(lastSection.id);
      }
    };

    if (location.pathname !== '/') {
      setActiveSection(null);
    } else {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <ActiveSectionContext.Provider value={activeSection}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionProvider;
