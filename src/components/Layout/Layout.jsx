import { Outlet } from 'react-router-dom';
import ActiveSectionProvider from '../../context/ActiveSectionContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AudioPlayerButton from '../AudioPlayerButton/AudioPlayerButton';
import useScrollToTop from '../../hooks/useScrollToTop';

function Layout() {
  useScrollToTop();

  return (
    <>
      <ActiveSectionProvider>
        <Header />
      </ActiveSectionProvider>
      <Outlet />
      <Footer />
      <AudioPlayerButton />
    </>
  );
}

export default Layout;
