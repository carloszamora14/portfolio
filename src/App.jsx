import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage';
import Emoiq from './pages/Emoiq';
import OhMyDeer from './pages/OhMyDeer';
import MovieFinder from './pages/MovieFinder';
import Lumina from './pages/Lumina';
import DailyUIChallenge from './pages/DailyUIChallenge';
import DonaBikes from './pages/DonaBikes';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="emoiq" element={<Emoiq />} />
          <Route path="oh-my-deer" element={<OhMyDeer />} />
          <Route path="movie-finder" element={<MovieFinder />} />
          <Route path="lumina" element={<Lumina />} />
          <Route path="daily-ui-challenge" element={<DailyUIChallenge />} />
          <Route path="dona-bikes" element={<DonaBikes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
