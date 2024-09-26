import { createContext, useRef } from 'react';

export const HeaderRefContext = createContext(undefined);

function HeaderRefProvider({ children }) {
  const headerRef = useRef(null);

  return (
    <HeaderRefContext.Provider value={headerRef}>
      {children}
    </HeaderRefContext.Provider>
  );
}

export default HeaderRefProvider;
