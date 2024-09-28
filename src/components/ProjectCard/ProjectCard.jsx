import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

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
          <Link
            to={url}
            className={styles.button}
            aria-label={`Learn more about the ${projectName} project`}
          >
            Read more
          </Link>
        </figcaption>
      </figure>
    </article>
  );
}

export default ProjectCard;
