import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import createMotionConfig from '../../utils/fadeIn';
import styles from './About.module.css';
import photo from '../../assets/profile-photo.png';

function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <SectionHeader heading="About me" subheading="Who am I." />
        <div className={styles.content}>
          <div className={styles.details}>
            <motion.p
              {...createMotionConfig('down', 0.2)}
              className={styles.description}
            >
              Hi, I&apos;m Carlos Zamora, a software engineering student close
              to graduating and a full-stack developer who loves coding. I enjoy
              building practical and creative solutions that help people get
              things done. With experience in both front-end and back-end
              development, I&apos;m able to see the bigger picture when it comes
              to creating websites and apps.
            </motion.p>
            <motion.p
              {...createMotionConfig('down', 0.2)}
              className={styles.description}
            >
              Since I started this journey, I&apos;ve worked on a variety of
              projects, learning how to make responsive, easy-to-use
              applications. I&apos;m always excited to learn new skills and stay
              up-to-date with the latest tools and trends in tech.
            </motion.p>
            <motion.p
              {...createMotionConfig('down', 0.2)}
              className={styles.description}
            >
              Some of my key interests include software security, database
              management, and UI/UX design.
            </motion.p>

            <motion.a
              {...createMotionConfig('down', 0.2)}
              href="/resume.pdf"
              download="Carlos_Zamora_CV.pdf"
              className={styles.button}
            >
              Download resume
            </motion.a>
          </div>
          <figure className={styles.profileContainer}>
            <motion.img
              {...createMotionConfig('down', 0.4)}
              src={photo}
              alt="Profile photo of Carlos Zamora"
              loading="lazy"
              decoding="async"
              className={styles.profileImage}
            />
            <motion.svg
              {...createMotionConfig('down', 0.2)}
              width="356"
              height="396"
              viewBox="0 0 356 396"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className={styles.backgroundSVG}
            >
              <rect
                x="141.875"
                y="76.0479"
                width="50"
                height="283"
                rx="25"
                transform="rotate(30 141.875 76.0479)"
                fill="currentColor"
              />
              <rect
                x="184.5"
                y="4"
                width="50"
                height="65"
                rx="25"
                transform="rotate(30 184.5 4)"
                fill="currentColor"
              />
              <rect
                x="283"
                width="50"
                height="400"
                rx="25"
                transform="rotate(30 283 0)"
                fill="currentColor"
              />
              <rect
                x="312"
                y="111"
                width="50"
                height="300"
                rx="25"
                transform="rotate(30 312 111)"
                fill="currentColor"
              />
            </motion.svg>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default About;
