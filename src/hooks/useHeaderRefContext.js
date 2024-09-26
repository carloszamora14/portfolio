import { useContext } from 'react';
import { HeaderRefContext } from '../context/HeaderRefContext';

function useHeaderRefContext() {
  const context = useContext(HeaderRefContext);

  if (context === undefined) {
    throw new Error(
      'useHeaderRefContext must be used within an useHeaderRefProvider',
    );
  }

  return context;
}

export default useHeaderRefContext;
