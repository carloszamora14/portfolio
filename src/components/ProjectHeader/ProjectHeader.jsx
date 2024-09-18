import styles from './ProjectHeader.module.css';

function ProjectHeader({ heading, subheading }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subheading}>{subheading}</p>
      </div>
    </header>
  );
}

export default ProjectHeader;
