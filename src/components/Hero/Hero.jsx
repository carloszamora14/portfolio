import { motion } from 'framer-motion';
import Button from '../Button/Button';
import Star from '../Star/Star';
import fadeIn from '../../utils/fadeIn';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className="container" style={{ position: 'relative' }}>
        <div className={`${styles.content}`}>
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={styles.headline}
          >
            I&apos;m Carlos Zamora, making ideas tangible with code and
            creativity
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={styles.description}
          >
            Hello! I enjoy tackling new problems and come up with effective
            solutions. With a solid grounding in coding, sharp analytical
            skills, and a passion for design, I&apos;m excited to take on
            projects that make a difference.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button className={styles.button}>See my projects</Button>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('up', 1, 0.4, 30)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={styles.decorations}
          aria-hidden="true"
        >
          <Star containerClassName={styles.star1} />
          <Star containerClassName={styles.star2} />
          <Star containerClassName={styles.star3} />
          <Star containerClassName={styles.star4} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
