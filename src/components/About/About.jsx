import { motion } from 'framer-motion';
import { BsDownload } from 'react-icons/bs';
import SectionHeader from '../SectionHeader/SectionHeader';
import RippleButton from '../RippleButton/RippleButton';
import createMotionConfig from '../../utils/fadeIn';
import styles from './About.module.css';
import profilePhoto from '../../assets/profile-photo.png';
import itsMe from '../../assets/its-me.svg';
import background from '../../assets/background.svg';

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
            <motion.div
              {...createMotionConfig('down', 0.2)}
              className={styles.buttonWrapper}
            >
              <RippleButton href="/resume.pdf" download="Carlos_Zamora_CV.pdf">
                <span className={styles.buttonContent}>
                  Download resume
                  <BsDownload
                    className={styles.buttonIcon}
                    aria-hidden="true"
                  />
                </span>
              </RippleButton>
            </motion.div>
          </div>
          <figure className={styles.profileContainer}>
            <motion.img
              {...createMotionConfig('down', 0.4)}
              src={profilePhoto}
              alt="Profile photo of Carlos Zamora"
              loading="lazy"
              decoding="async"
              className={styles.profileImage}
            />
            <motion.img
              {...createMotionConfig('down', 1.0)}
              src={itsMe}
              className={styles.itsMeIcon}
              aria-hidden="true"
              alt=""
            />
            <motion.img
              {...createMotionConfig('down', 0.2)}
              src={background}
              className={styles.backgroundSVG}
              aria-hidden="true"
              alt=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default About;
