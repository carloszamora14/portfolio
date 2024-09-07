import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { RiGithubLine } from 'react-icons/ri';
import { IoHeart } from 'react-icons/io5';
import SectionHeader from '../SectionHeader/SectionHeader';
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';
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
        <p className={styles.description}>
          Feel free to contact me if you have any questions or want to connect.
        </p>
        <div className={styles.contactInfo}>
          <a href={`mailto:${emailAddress}`} className={styles.email}>
            <FaEnvelope className={styles.emailIcon} />
            {emailAddress}
          </a>
          <div className={styles.socials}>
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
          </div>
        </div>
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
