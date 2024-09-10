import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path=":projectName" element={<ProjectPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
