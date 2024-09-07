import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Projects.module.css';

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
        <div className={styles.content}></div>
      </div>
    </section>
  );
}

export default Projects;
