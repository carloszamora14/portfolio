import styles from './Paragraph.module.css';

function Paragraph({ title, children, orientation = 'row' }) {
  return (
    <section
      className={`container ${styles.wrapper} ${orientation === 'row' ? styles.row : ''}`}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default Paragraph;
