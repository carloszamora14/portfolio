import Gallery from '../components/Gallery/Gallery';
import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import projects from '../data/projects';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
import styles from '../styles/ProjectPage.module.css';

function MovieFinder() {
  const projectData = projects.find(
    project => project.projectName === 'Movie Finder',
  );

  return (
    <main>
      <ProjectHeader
        heading="Movie Finder"
        subheading="A web app to discover and explore detailed movie information"
      />
      <Gallery images={projectData.images.gallery} />
      <ProjectInfo projectInfo={projectData.info} />
      <ProjectSection title="About">
        <p className={styles.paragraph}>
          As part of my final project for the Dev.F bootcamp, I developed a web
          application that integrates with the IMDb API to display and explore
          movies. Below are the main requirements and functionalities of the
          project.
        </p>
      </ProjectSection>
      <ProjectSection title="Requirements">
        <div className={styles.listWrapper}>
          <h3 className={styles.listTitle}>Functional requirements:</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <b>Movie search and discovery</b>: Users will have the ability to
              search for and discover movies through the IMDB API. The
              application will display a wide range of movie options, allowing
              users to explore different titles effortlessly.
            </li>
            <li className={styles.listItem}>
              <b>Detailed movie information</b>: For each selected movie, users
              will be presented with comprehensive details, including the cast,
              director, and a plot summary. This information will offer valuable
              insights to help users make informed decisions about their movie
              choices.
            </li>
            <li className={styles.listItem}>
              <b>Personalized filtering options</b>: Users will be able to
              filter movies based on user ratings, enabling a more personalized
              and tailored search experience that matches individual
              preferences.
            </li>
            <li className={styles.listItem}>
              <b>Seamless navigation with pagination</b>: The application will
              incorporate pagination to allow users to navigate through multiple
              pages of search results with ease, ensuring a smooth browsing
              experience even with large data sets.
            </li>
            <li className={styles.listItem}>
              <b>Live server accessibility</b>: The application will be hosted
              on a live server, making it accessible from anywhere via the
              internet, ensuring a reliable and consistent user experience.
            </li>
          </ul>
        </div>
        <div className={styles.listWrapper}>
          <h3 className={styles.listTitle}>Non-functional requirements:</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <b>User-friendly design</b>: The design will feature a visually
              appealing and user-friendly color scheme that enhances the overall
              experience and encourages longer interaction.
            </li>
            <li className={styles.listItem}>
              <b>Easy Navigation and contact information</b>: The application
              will include a navigation bar for straightforward access to
              different sections, alongside a footer containing the
              developer&apos;s contact details for user support.
            </li>
            <li className={styles.listItem}>
              <b>Error handling and feedback</b>: Clear error messages will be
              displayed if there are any issues with fetching data from the API,
              ensuring that users are kept informed and aware of potential
              problems.
            </li>
            <li className={styles.listItem}>
              <b>Responsive layout</b>: The design will be responsive, adapting
              to different screen sizes and devices, providing a seamless user
              experience across smartphones, tablets, and desktops.
            </li>
          </ul>
        </div>
      </ProjectSection>
      <ProjectSection title="Style guide" orientation="col">
        <p className={`${styles.paragraph} ${styles.col}`}>
          I chose Open Sans for its modern and clean look, making it easy to
          read on all screen sizes. The color palette includes a light
          background to keep the interface bright and friendly, while a dark
          color for the text ensures good contrast and readability. I used some
          accent colors to highlight important elements without making the
          design too busy
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

export default MovieFinder;
