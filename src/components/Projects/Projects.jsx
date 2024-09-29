import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import SectionHeader from '../SectionHeader/SectionHeader';
import projects from '../../data/projects';
import createMotionConfig from '../../utils/fadeIn';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <SectionHeader
          heading="Projects"
          subheading="A glimpse into what I've built."
        />
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={styles.description}
        >
          Here you&apos;ll find a selection of projects I&apos;ve worked on,
          from high-fidelity prototypes to web apps. These showcase the skills
          I&apos;ve acquired and my dedication to learning and improving with
          every challenge.
        </motion.p>
        <div className={styles.content}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...createMotionConfig('down', 0.2 + 0.15 * index)}
            >
              <ProjectCard
                img={project.images.cover.src}
                imgAlt={project.images.cover.alt}
                projectName={project.projectName}
                description={project.description}
                url={project.url}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
