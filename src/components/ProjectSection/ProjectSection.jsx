import { motion } from 'framer-motion';
import createMotionConfig from '../../utils/fadeIn';
import styles from './ProjectSection.module.css';

function ProjectSection({ title, children, orientation = 'row' }) {
  return (
    <section
      className={`container ${styles.wrapper} ${orientation === 'row' ? styles.row : ''}`}
    >
      <motion.h2 {...createMotionConfig('down', 0.2)} className={styles.title}>
        {title}
      </motion.h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default ProjectSection;
