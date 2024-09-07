import { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import Tooltip from '../Tooltip/Tooltip';
import skills from '../../data/skillsList';
import styles from './SkillsList.module.css';

function SkillsList() {
  const [hoveredType, setHoveredType] = useState(null);

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <SectionHeader heading="Skills" subheading="What I'm good at." />

        <div className={styles.contentWrapper}>
          <div className={styles.details}>
            <p className={styles.description}>
              I enjoy working with JavaScript, CSS, and HTML to create simple
              but engaging and user-friendly websites. With React, I build
              responsive and interactive features that make web applications
              more enjoyable to use. I also have experience with Node.js for
              server-side programming and handle data with MySQL and MongoDB.
              For design and prototyping, I use Figma to turn concepts into
              clear and attractive visuals.
            </p>
            <p className={styles.description}>
              I&apos;m also familiar with another technologies like C, C++, Java
              and Bash. While I&apos;m not a master of these languages, my
              curiosity drives me to learn and explore new tools and techniques,
              making me adaptable and eager to tackle new challenges.
            </p>
          </div>
          <div className={styles.skillsDisplay}>
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
                    />
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsList;
