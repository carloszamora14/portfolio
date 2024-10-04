import { motion } from 'framer-motion';
import useElementHeight from '../../hooks/useElementHeight';
import useHeaderRefContext from '../../hooks/useHeaderRefContext';
import createMotionConfig from '../../utils/fadeIn';
import styles from './ProjectHeader.module.css';

function ProjectHeader({ heading, subheading }) {
  const headerRef = useHeaderRefContext();
  const headerHeight = useElementHeight(headerRef);

  return (
    <header
      className={styles.header}
      style={{ '--header-height': `${headerHeight}px` }}
    >
      <div className="container">
        <motion.h1
          {...createMotionConfig('down', 0.2)}
          className={styles.heading}
        >
          {heading}
        </motion.h1>
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={styles.subheading}
        >
          {subheading}
        </motion.p>
      </div>
    </header>
  );
}

export default ProjectHeader;
