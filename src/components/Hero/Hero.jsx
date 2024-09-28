import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button/Button';
import Star from '../Star/Star';
import useHeaderRefContext from '../../hooks/useHeaderRefContext';
import useScrollOffset from '../../hooks/useScrollOffset';
import fadeIn from '../../utils/fadeIn';
import styles from './Hero.module.css';

function Hero() {
  const headerRef = useHeaderRefContext();
  const scrollOffset = useScrollOffset();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const navbar = headerRef.current;
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      setHeaderHeight(navbarHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [headerRef]);

  return (
    <section
      className={styles.hero}
      id="home"
      style={{ '--header-height': `${headerHeight}px` }}
    >
      <div className="container" style={{ position: 'relative' }}>
        <div className={`${styles.content}`}>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={styles.headline}
          >
            <div>
              I&apos;m <span className={styles.name}>Carlos Zamora</span>
            </div>
            <div>Bringing ideas to life</div>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={styles.description}
          >
            Hello! I love solving new problems with effective solutions. With
            strong coding abilities, sharp analytical thinking, and a passion
            for design, I&apos;m excited to work on projects that make a
            difference.
          </motion.p>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button
              to="/#projects"
              scrollOffset={el => scrollOffset(el, headerRef)}
            >
              Explore my work
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('down', 1)}
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
