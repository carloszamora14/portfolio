import { motion } from 'framer-motion';
import Star from '../Star/Star';
import fadeIn from '../../utils/fadeIn';
import styles from './SectionHeader.module.css';

function SectionHeader({ heading, subheading, darkVariant = false }) {
  return (
    <header className={styles.sectionHeader}>
      <motion.h2
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className={`${styles.heading} ${darkVariant ? styles.dark : ''}`}
      >
        {heading}
        <Star containerClassName={styles.star} animating={false} />
      </motion.h2>
      <motion.p
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className={styles.subheading}
      >
        {subheading}
      </motion.p>
    </header>
  );
}

export default SectionHeader;
