import useElementHeight from '../../hooks/useElementHeight';
import useHeaderRefContext from '../../hooks/useHeaderRefContext';
import styles from './ProjectHeader.module.css';

function ProjectHeader({ heading, subheading }) {
  const headerRef = useHeaderRefContext();
  const headerHeight = useElementHeight(headerRef);

  return (
    <header
      className={styles.header}
      style={{ '--header-height': `${headerHeight}px` }}
    >
      <div className="container">
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subheading}>{subheading}</p>
      </div>
    </header>
  );
}

export default ProjectHeader;
