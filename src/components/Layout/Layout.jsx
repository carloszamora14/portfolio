import { Outlet } from 'react-router-dom';
import ActiveSectionProvider from '../../context/ActiveSectionContext';
import HeaderRefProvider from '../../context/HeaderRefContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AudioPlayerButton from '../AudioPlayerButton/AudioPlayerButton';
import useScrollToTop from '../../hooks/useScrollToTop';

function Layout() {
  useScrollToTop();

  return (
    <HeaderRefProvider>
      <ActiveSectionProvider>
        <Header />
      </ActiveSectionProvider>
      <Outlet />
      <Footer />
      <AudioPlayerButton />
    </HeaderRefProvider>
  );
}

export default Layout;
