import styles from './ProjectSection.module.css';

function ProjectSection({ title, children, orientation = 'row' }) {
  return (
    <section
      className={`container ${styles.wrapper} ${orientation === 'row' ? styles.row : ''}`}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default ProjectSection;
