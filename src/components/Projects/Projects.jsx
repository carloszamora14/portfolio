import ProjectCard from '../ProjectCard/ProjectCard';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Projects.module.css';
import Lumina from '../../assets/lumina/login.jpeg';
import DailyUiChallenge from '../../assets/daily-ui-challenge/cover.png';
import Emoiq from '../../assets/emoiq/cover.png';
import OhMyDeer from '../../assets/oh-my-deer/2.png';
import NumberGuessingGame from '../../assets/number-guessing-game/cover.png';
import DonaBikes from '../../assets/dona-bikes/cover.jpg';
import MovieFinder from '../../assets/movie-finder/cover.png';

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <SectionHeader
          heading="Projects"
          subheading="A glimpse into what I've built."
        />
        <p className={styles.description}>
          Here you&apos;ll find a selection of projects I&apos;ve worked on,
          from high-fidelity prototypes to web apps. These showcase the skills
          I&apos;ve acquired and my dedication to learning and improving with
          every challenge.
        </p>
        <div className={styles.content}>
          <ProjectCard
            img={Lumina}
            imgAlt="Mobile application Lumina home screen"
            projectName="Lumina"
            tagline="Be safe"
            description="A project with social benefit"
          />
          <ProjectCard
            img={DailyUiChallenge}
            imgAlt="Mobile application Lumina home screen"
            projectName="Daily UI Challenge"
            tagline="Be safe"
            description="A project with social benefit"
          />
          <ProjectCard
            img={Emoiq}
            imgAlt="Mobile application Lumina home screen"
            projectName="EmoIQ"
            tagline="Be safe"
            description="A project with social benefit"
          />
          <ProjectCard
            img={OhMyDeer}
            imgAlt="Mobile application Lumina home screen"
            projectName="Oh My Deer"
            tagline="Be safe"
            description="A project with social benefit"
          />
          <ProjectCard
            img={NumberGuessingGame}
            imgAlt="Mobile application Lumina home screen"
            projectName="Number guessing game"
            tagline="Be safe"
            description="A project with social benefit"
          />
          <ProjectCard
            img={DonaBikes}
            imgAlt="Mobile application Lumina home screen"
            projectName="Dona Bikes"
            tagline="Be safe"
            description="A project with social benefit"
          />
          <ProjectCard
            img={MovieFinder}
            imgAlt="Mobile application Lumina home screen"
            projectName="Movie Finder"
            tagline="Be safe"
            description="A project with social benefit"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
