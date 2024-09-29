import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import projects from '../data/projects';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
import styles from '../styles/ProjectPage.module.css';

function DonaBikes() {
  const projectData = projects.find(
    project => project.projectName === 'Dona Bikes',
  );

  return (
    <main>
      <ProjectHeader
        heading="Dona Bikes"
        subheading="A design and Figma prototype for a fictional bike shop"
      />

      <figure className={`container ${styles.figureContainer}`}>
        <img
          className={styles.image}
          src={projectData.images.mockup.src}
          alt={projectData.images.mockup.alt}
        />
      </figure>

      <ProjectInfo projectInfo={projectData.info} />

      <ProjectSection title="Project brief">
        <p className={styles.paragraph}>
          Our project, Dona Bikes, is centered on selling high-quality bicycles.
          The ideal customer is Dimitri, a man in his mid-40s who lives with
          friends in Mexico. He is a high school graduate and works as part of a
          small team. Although Dimitri has never purchased a product like ours
          before, he is passionate about productivity and efficiency, making him
          receptive to solutions that enhance his daily life.
        </p>
      </ProjectSection>

      <ProjectSection title="Task flow" orientation="col">
        <p className={`${styles.paragraph} ${styles.col}`}>
          The goal of this project was to design a purchase flow for an
          e-commerce mobile app focused on bike sales. The task flow encompasses
          several key steps: starting from the homepage or marketing page, users
          explore product features, proceed to checkout, and finally receive an
          order confirmation.
        </p>
        <figure className={styles.figure}>
          <img
            className={styles.image}
            style={{ '--max-width': '60rem' }}
            src={projectData.images.taskFlow.src}
            alt={projectData.images.taskFlow.alt}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </ProjectSection>

      <ProjectSection title="Low fidelity prototype" orientation="col">
        <figure className={styles.figure}>
          <img
            className={styles.image}
            src={projectData.images.lofi.src}
            alt={projectData.images.lofi.alt}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </ProjectSection>

      <ProjectSection title="Style guide" orientation="col">
        <p className={`${styles.paragraph} ${styles.col}`}>
          I wanted a design with an almost white background and black font color
          to avoid eye strain / contrast issues for my Persona who is in their
          40s. For my fonts, I opted for sans-serif typefaces, such as Quicksand
          for headers and Open Sans for paragraphs. As we know, these fonts are
          easy on the eyes, look friendly, and provide an approachable vibe.
          This is crucial in my case, as our Persona hasn&apos;t purchased any
          bike, and we aim to create a warm and amicable atmosphere to make them
          feel comfortable.
        </p>
        <figure className={styles.figure}>
          <img
            className={styles.image}
            src={projectData.images.styleGuide.src}
            alt={projectData.images.styleGuide.alt}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </ProjectSection>

      <ProjectSection title="High fidelity prototype" orientation="col">
        <p className={`${styles.paragraph} ${styles.col}`}>
          I focused on creating a user-centered design that emphasizes clarity
          and ease of use. The interface is intuitive and user-friendly,
          allowing users to navigate, explore, and make purchases with minimal
          effort.
        </p>
        <p className={`${styles.paragraph} ${styles.col}`}>
          The images are selected to align with my persona&apos;s needs,
          reflecting their focus on efficiency and productivity, and are
          supported by text that highlights key information.
        </p>
      </ProjectSection>
    </main>
  );
}

export default DonaBikes;
