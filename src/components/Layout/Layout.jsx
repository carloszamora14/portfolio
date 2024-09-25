import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AudioPlayerButton from '../AudioPlayerButton/AudioPlayerButton';
import useActiveSection from '../../hooks/useActiveSection';
import useScrollToTop from '../../hooks/useScrollToTop';

function Layout() {
  const activeSection = useActiveSection();
  useScrollToTop();

  return (
    <>
      <Header activeSection={activeSection} />
      <Outlet />
      <Footer />
      <AudioPlayerButton />
    </>
  );
}

export default Layout;
