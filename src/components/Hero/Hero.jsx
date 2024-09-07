import Button from '../Button/Button';
import Star from '../Star/Star';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container" style={{ position: 'relative' }}>
        <div className={`${styles.content}`}>
          <h1 className={styles.headline}>
            I&apos;m Carlos Zamora, making ideas tangible with code and
            creativity
          </h1>
          <p className={styles.description}>
            Hello! I enjoy tackling new problems and come up with effective
            solutions. With a solid grounding in coding, sharp analytical
            skills, and a passion for design, I&apos;m excited to take on
            projects that make a difference.
          </p>
          <Button>See my projects</Button>
        </div>

        <div className={styles.decorations} aria-hidden="true">
          <Star containerClassName={styles.star1} />
          <Star containerClassName={styles.star2} />
          <Star containerClassName={styles.star3} />
          <Star containerClassName={styles.star4} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
