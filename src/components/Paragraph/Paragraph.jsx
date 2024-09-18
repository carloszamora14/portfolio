import styles from './Paragraph.module.css';

function Paragraph({ title, children }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Paragraph;
