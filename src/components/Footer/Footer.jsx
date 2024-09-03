import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newSection}>
        <h2>NEW</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h3>Explore</h3>
          <ul>
            <li>Enterprise</li>
            <li>AI Processor Models</li>
            <li>Team Workspaces</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Company</h3>
          <ul>
            <li>News</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Connect</h3>
          <ul className={styles.socialMedia}>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2021 [Your Company Name]</p>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
