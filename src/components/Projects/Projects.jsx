import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';
import SectionHeader from '../SectionHeader/SectionHeader';
import projects from '../../data/projects';
import styles from './Projects.module.css';
import fadeIn from '../../utils/fadeIn';

function Projects() {
  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delay: 0.6,
      },
    },
  };

  const staggerChild = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <SectionHeader
          heading="Projects"
          subheading="A glimpse into what I've built."
        />
        <motion.p
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className={styles.description}
        >
          Here you&apos;ll find a selection of projects I&apos;ve worked on,
          from high-fidelity prototypes to web apps. These showcase the skills
          I&apos;ve acquired and my dedication to learning and improving with
          every challenge.
        </motion.p>
        <motion.div
          className={styles.content}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerChild}
              viewport={{ once: true, amount: 0.2 }}
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
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
