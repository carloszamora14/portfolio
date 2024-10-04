import { motion } from 'framer-motion';
import Button from '../Button/Button';
import Star from '../Star/Star';
import useHeaderRefContext from '../../hooks/useHeaderRefContext';
import useScrollOffset from '../../hooks/useScrollOffset';
import useElementHeight from '../../hooks/useElementHeight';
import createMotionConfig from '../../utils/fadeIn';
import styles from './Hero.module.css';

function Hero() {
  const headerRef = useHeaderRefContext();
  const scrollOffset = useScrollOffset();
  const headerHeight = useElementHeight(headerRef);

  return (
    <section
      className={styles.hero}
      id="home"
      style={{ '--header-height': `${headerHeight}px` }}
    >
      <div className={`container ${styles.contentWrapper}`}>
        <div className={`${styles.content}`}>
          <motion.h1
            {...createMotionConfig('down', 0.2)}
            className={styles.headline}
          >
            <div>
              I&apos;m <span className={styles.name}>Carlos Zamora</span>
            </div>
            <div>Bringing ideas to life</div>
          </motion.h1>
          <motion.p
            {...createMotionConfig('down', 0.4)}
            className={styles.description}
          >
            Hello! I love solving new problems with effective solutions. With
            strong coding abilities, sharp analytical thinking, and a passion
            for design, I&apos;m excited to work on projects that make a
            difference.
          </motion.p>
          <motion.div {...createMotionConfig('down', 0.6)}>
            <Button
              to="/#projects"
              scrollOffset={el => scrollOffset(el, headerRef)}
            >
              Explore my work
            </Button>
          </motion.div>
        </div>

        <motion.div
          {...createMotionConfig('down', 1)}
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
