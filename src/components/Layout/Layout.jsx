import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AudioPlayerButton from '../AudioPlayerButton/AudioPlayerButton';
import useActiveSection from '../../hooks/useActiveSection';

function Layout() {
  const activeSection = useActiveSection();

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
