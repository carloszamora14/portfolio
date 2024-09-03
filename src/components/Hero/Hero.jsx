import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.logo}>
        <div className={styles.star}></div>
      </div>
      <h1 className={styles.headline}>A powerful and catchy phrase</h1>
      <p className={styles.description}>
        I'm passionate about crafting experiences that are engaging, accessible,
        and user-centric.
      </p>
      <Button>See my projects</Button>
      <div className={styles.decorations}>
        <div className={styles.topRightStar}></div>
        <div className={styles.bottomLeftStar}></div>
        <div className={styles.topLeftShape}></div>
        <div className={styles.bottomRightShape}></div>
      </div>
    </div>
  );
};

export default Hero;
