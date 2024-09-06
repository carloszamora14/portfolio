import Star from '../Star/Star';
import styles from './SectionHeader.module.css';

function SectionHeader({ heading, subheading, darkVariant = false }) {
  return (
    <header className={styles.sectionHeader}>
      <h2 className={`${styles.heading} ${darkVariant ? styles.dark : ''}`}>
        {heading}
        <Star containerClassName={styles.star} animating={false} />
      </h2>
      <p className={styles.subheading}>{subheading}</p>
    </header>
  );
}

export default SectionHeader;
