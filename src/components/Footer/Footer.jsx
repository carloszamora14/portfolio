import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { RiGithubLine } from 'react-icons/ri';
import { IoHeart } from 'react-icons/io5';
import SectionHeader from '../SectionHeader/SectionHeader';
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';
import fadeIn from '../../utils/fadeIn';
import styles from './Footer.module.css';

function Footer() {
  const emailAddress = 'czamora5@ucol.mx';

  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.contentWrapper}`}>
        <SectionHeader
          heading="Contact me"
          subheading="Say hello."
          darkVariant={true}
        />
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className={styles.description}
        >
          Feel free to contact me if you have any questions or want to connect.
        </motion.p>
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className={styles.contactInfo}
        >
          <a href={`mailto:${emailAddress}`} className={styles.email}>
            <FaEnvelope className={styles.emailIcon} />
            {emailAddress}
          </a>
          <motion.div
            variants={fadeIn('up', 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={styles.socials}
          >
            <SocialMediaButton
              Icon={FaLinkedinIn}
              text="@carloszamora14"
              url="https://www.linkedin.com/in/carloszamora14/"
              label="Visit my LinkedIn profile"
            />
            <SocialMediaButton
              Icon={RiGithubLine}
              text="@carloszamora14"
              url="https://github.com/carloszamora14"
              label="Visit my GitHub profile"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.bottomBanner}>
        <div className={`container ${styles.bottomContent}`}>
          Made with <IoHeart className={styles.heart} /> by Carlos Zamora
        </div>
      </div>
    </footer>
  );
}

export default Footer;
