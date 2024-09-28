import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import SkillsList from '../components/SkillsList/SkillsList';

function LandingPage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <SkillsList />
    </main>
  );
}

export default LandingPage;
