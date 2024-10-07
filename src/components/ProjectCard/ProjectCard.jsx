import { BsArrowRight } from 'react-icons/bs';
import styles from './ProjectCard.module.css';
import RippleButton from '../RippleButton/RippleButton';

function ProjectCard({ img, imgAlt, projectName, description, url }) {
  return (
    <article className={styles.card}>
      <figure className={styles.figure}>
        <div className={styles.imageWrapper}>
          <img
            src={img}
            alt={imgAlt}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className={styles.details}>
          <h3 className={styles.title}>{projectName}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonWrapper}>
            <RippleButton
              to={url}
              aria-label={`Learn more about the ${projectName} project`}
            >
              <span className={styles.buttonContent}>
                Read more
                <BsArrowRight
                  className={styles.buttonIcon}
                  aria-hidden="true"
                />
              </span>
            </RippleButton>
          </div>
        </figcaption>
      </figure>
    </article>
  );
}

export default ProjectCard;
