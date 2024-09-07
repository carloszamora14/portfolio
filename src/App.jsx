import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import SkillsList from './components/SkillsList/SkillsList';
import Footer from './components/Footer/Footer';
import './styles.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <SkillsList />
      </main>
      <Footer />
    </>
  );
}

export default App;
