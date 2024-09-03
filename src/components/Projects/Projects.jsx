import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2>My Projects</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <img src="project1.jpg" alt="Project 1" />
          <h3>Project Title 1</h3>
          <p>Short description of the project.</p>
        </div>
        <div className={styles.projectCard}>
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project Title 2</h3>
          <p>Short description of the project.</p>
        </div>
        <div className={styles.projectCard}>
          <img src="project3.jpg" alt="Project 3" />
          <h3>Project Title 3</h3>
          <p>Short description of the project.</p>
        </div>
        <div className={styles.projectCard}>
          <img src="project4.jpg" alt="Project 4" />
          <h3>Project Title 4</h3>
          <p>Short description of the project.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
