import { useContext } from 'react';
import { ActiveSectionContext } from '../context/ActiveSectionContext';

function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === undefined) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionProvider',
    );
  }

  return context;
}

export default useActiveSectionContext;
