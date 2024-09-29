import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import projects from '../data/projects';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
import styles from '../styles/ProjectPage.module.css';

function Lumina() {
  const projectData = projects.find(
    project => project.projectName === 'Lumina',
  );

  return (
    <main>
      <ProjectHeader
        heading="Lumina"
        subheading="Prototype designed to help prevent gender-based violence"
      />

      <figure className={`container ${styles.figureContainer}`}>
        <img
          className={styles.image}
          src={projectData.images.mockups.src}
          alt={projectData.images.mockups.alt}
        />
      </figure>

      <ProjectInfo projectInfo={projectData.info} />

      <ProjectSection title="What is Lumina">
        <p className={styles.paragraph}>
          A prototype of a mobile application aimed at preventing gender-based
          violence through a panic button that allows users to report abuse and
          dangerous situations in everyday life. Additionally, it provides
          access to maps with color-coded zones, highlighting areas with varying
          levels of risk. The app aims to identify high-risk areas and promote
          greater physical and overall safety for women and girls.
        </p>
      </ProjectSection>

      <ProjectSection title="Purpose">
        <p className={styles.paragraph}>
          We care about the mental and physical well-being of all Mexican women
          and girls. They all deserve to live in peace, security, and
          fulfillment. Our app is a tool to break the chains of violence imposed
          on women by society through a tool that provides immediate help and
          risk-level mapping.
        </p>
      </ProjectSection>

      <ProjectSection title="Development process" orientation="col">
        <p className={`${styles.paragraph} ${styles.col}`}>
          This was a collaborative project with a team of six members, and our
          goal was to design and propose an application that addresses a
          pressing social issue affecting our community. We used the SCRUM
          methodology to manage the development process, where we learned the
          basic concepts, terminology, structure, and practices of SCRUM, as
          well as an understanding of the workflow of this agile methodology.
          This included creating the product backlog and sprint backlog,
          planning sprints, and delivering incremental updates. We regularly
          presented these updates to the Scrum Master for feedback and to ensure
          alignment with project goals. This was one of my first experiences
          working on a collaborative project, and although it was stressful for
          both my team and me, I am proud of what we accomplished.
        </p>
        <figure className={styles.figure}>
          <img
            className={styles.image}
            src={projectData.images.sprintBacklog.src}
            alt={projectData.images.sprintBacklog.alt}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </ProjectSection>

      <ProjectSection title="My contribution">
        <p className={styles.paragraph}>
          In our team, everyone participated in defining the functional and
          non-functional requirements, creating the product backlog and sprint
          backlog, and deciding on user interface elements, color palette, and
          early mockups.
        </p>
        <p className={styles.paragraph}>
          I specifically focused on the signup process, which involved several
          steps for users to complete before using the app. First, users fill
          out a form with their name, CURP, birthdate, and password. Then, they
          provide medical information, such as allergies and blood type, and add
          trusted contacts who will be notified if they find themselves in a
          dangerous situation. Additionally, I was responsible for the profile
          screen, where users can edit their information.
        </p>
      </ProjectSection>

      <ProjectSection title="Style guide" orientation="col">
        <p className={`${styles.paragraph} ${styles.col}`}>
          The color palette for Lumina reflects warmth, empathy, and
          empowerment, using soft tones to evoke calm and safety, while bolder
          purples emphasize strength. For the typography, Dongle offers a
          rounded, approachable feel for readability, while Mitr adds a clean,
          structured touch to keep the design modern and clear. Both fonts
          ensure the app remains easy to navigate and user-friendly.
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
    </main>
  );
}

export default Lumina;
