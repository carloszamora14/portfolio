import styles from './SocialMediaButton.module.css';

function SocialMediaButton({ Icon, url, text, label }) {
  return (
    <a href={url} className={styles.link} aria-label={label}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
        <p className={styles.text} style={{ '--length': text.length }}>
          {text}
        </p>
      </div>
    </a>
  );
}

export default SocialMediaButton;
