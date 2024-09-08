import styles from './ProjectCard.module.css';

function ProjectCard({ img, imgAlt, projectName, description }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={imgAlt} className={styles.projectImage} />
      </div>
      <section className={styles.projectDetails}>
        <h3 className={styles.projectTitle}>{projectName}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <button
          className={styles.projectButton}
          aria-label={`View ${projectName} project`}
        >
          View project
        </button>
      </section>
    </article>
  );
}

export default ProjectCard;
