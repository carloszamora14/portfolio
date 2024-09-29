import styles from './ProjectInfo.module.css';

function ProjectInfo({ projectInfo }) {
  return (
    <section
      className={`container ${styles.info}`}
      aria-labelledby="hidden-title"
    >
      <h2 id="hidden-title" className="sr-only">
        Technologies and resources section
      </h2>

      <div className={styles.grid}>
        {projectInfo.tools && (
          <div className={styles.gridItem}>
            <h3 className={styles.title}>{projectInfo.tools.title}</h3>
            <p className={styles.infoText}>{projectInfo.tools.data}</p>
          </div>
        )}
        {projectInfo.links && (
          <div className={styles.gridItem}>
            <h3 className={styles.title}>{projectInfo.links.title}</h3>
            <ul className={styles.linksList}>
              {projectInfo.links.data.map(link => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectInfo;
