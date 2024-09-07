import styles from './ProjectCard.module.css';

function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      <img src="project1.jpg" alt="Project 1" />
      <h3>Project Title 1</h3>
      <p>Short description of the project.</p>
    </div>
  );
}

export default ProjectCard;
