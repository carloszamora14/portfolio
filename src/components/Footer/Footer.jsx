import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { RiGithubLine } from 'react-icons/ri';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './Footer.module.css';
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';

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
        <div className="container">Made with 🖤 by Carlos Zamora</div>
      </div>
    </footer>
  );
}

export default Footer;
