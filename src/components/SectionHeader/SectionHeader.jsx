import { motion } from 'framer-motion';
import Star from '../Star/Star';
import createMotionConfig from '../../utils/fadeIn';
import styles from './SectionHeader.module.css';

function SectionHeader({ heading, subheading, darkVariant = false }) {
  return (
    <header className={styles.sectionHeader}>
      <motion.h2
        {...createMotionConfig('down', 0.2)}
        className={`${styles.heading} ${darkVariant ? styles.dark : ''}`}
      >
        {heading}
        <Star containerClassName={styles.star} animating={false} />
      </motion.h2>
      <motion.p
        {...createMotionConfig('down', 0.2)}
        className={styles.subheading}
      >
        {subheading}
      </motion.p>
    </header>
  );
}

export default SectionHeader;
