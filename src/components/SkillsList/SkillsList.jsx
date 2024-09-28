import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import Tooltip from '../Tooltip/Tooltip';
import skills from '../../data/skillsList';
import styles from './SkillsList.module.css';
import fadeIn from '../../utils/fadeIn';

function SkillsList() {
  const [hoveredType, setHoveredType] = useState(null);

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <SectionHeader heading="Skills" subheading="What I'm good at." />

        <div className={styles.contentWrapper}>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={styles.details}
          >
            <p className={styles.description}>
              I enjoy using JavaScript, CSS, and HTML to create simple websites.
              React is my go-to technology for creating interactive applications
              with a smooth and engaging user experience. I also have experience
              with Node.js for server-side programming and work with MySQL and
              MongoDB for data management. For design and prototyping, I use
              Figma to turn ideas into clear and attractive designs.
            </p>
            <p className={styles.description}>
              I also know other technologies like C, C++, Java, and Bash.
              I&apos;m not an expert in these languages, but my curiosity
              motivates me to learn and try new tools, making me flexible and
              ready to take on new challenges.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={styles.skillsDisplay}
          >
            <ul
              className={`${styles.list} ${hoveredType ? styles.listHovered : ''}`}
            >
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className={`${styles.listItem} ${hoveredType === skill.type ? styles.highlight : ''}`}
                  onMouseEnter={() => setHoveredType(skill.type)}
                  onMouseLeave={() => setHoveredType(null)}
                >
                  <Tooltip heading={skill.type} text={skill.name}>
                    <img
                      src={skill.url}
                      className={styles.icon}
                      alt={`${skill.name} icon`}
                      loading="lazy"
                      decoding="async"
                    />
                  </Tooltip>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SkillsList;
