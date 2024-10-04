import { motion } from 'framer-motion';
import createMotionConfig from '../../utils/fadeIn';
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
          <motion.div
            {...createMotionConfig('down', 0.2)}
            className={styles.gridItem}
          >
            <h3 className={styles.title}>{projectInfo.tools.title}</h3>
            <p className={styles.infoText}>{projectInfo.tools.data}</p>
          </motion.div>
        )}
        {projectInfo.links && (
          <motion.div
            {...createMotionConfig('down', 0.2)}
            className={styles.gridItem}
          >
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
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ProjectInfo;
