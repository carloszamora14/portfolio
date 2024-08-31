import styles from './SkillsList.module.css';
import { skills } from '../../data/skillsList';

function SkillsList() {
  return (
    <div className={styles.skillsList}>
      <h2 className={styles.title}>Skills</h2>
      <ul className={styles.list}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.listItem}>
            <img
              src={skill.url}
              className={styles.icon}
              alt={`${skill.name} icon`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
