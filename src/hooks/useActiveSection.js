import { useState, useEffect } from 'react';

function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
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

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}

export default useActiveSection;
