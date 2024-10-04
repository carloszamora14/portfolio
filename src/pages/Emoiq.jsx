import { motion } from 'framer-motion';
import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import projects from '../data/projects';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
import createMotionConfig from '../utils/fadeIn';
import styles from '../styles/ProjectPage.module.css';

function Emoiq() {
  const projectData = projects.find(project => project.projectName === 'EmoIQ');

  return (
    <main>
      <ProjectHeader
        heading="EmoIQ"
        subheading="App for improving emotional intelligence"
      />

      <motion.figure
        {...createMotionConfig('down', 0.2)}
        className={`container ${styles.figureContainer}`}
      >
        <img
          className={styles.image}
          style={{ '--width': '45%', '--max-width': '30rem' }}
          src={projectData.images.mockups.src}
          alt={projectData.images.mockups.alt}
        />
      </motion.figure>

      <ProjectInfo projectInfo={projectData.info} />

      <ProjectSection title="Problem">
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={styles.paragraph}
        >
          In today&apos;s world, excessive time spent on social media has led to
          a gradual loss of assertiveness in human interactions, negatively
          impacting both personal and professional communication. This has
          resulted in more conflicts, making it essential to educate people with
          tools for effective communication. The pandemic worsened this issue by
          reducing social interaction and increasing depression and anxiety.
          Learning to manage emotions has become vital for personal success.
          This app provides users with practical and theoretical resources to
          develop emotional intelligence, helping them improve their social
          skills.
        </motion.p>
      </ProjectSection>

      <ProjectSection title="Our solution">
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={styles.paragraph}
        >
          A mobile application specifically designed for learning and enhancing
          emotional intelligence. Users will have access to a variety of
          carefully selected resources, including relevant information and
          practical exercises. The primary goal of the application is to improve
          interpersonal relationships by helping users understand and manage
          their emotions effectively.
        </motion.p>
        <div className={styles.listWrapper}>
          <motion.h3
            {...createMotionConfig('down', 0.2)}
            className={styles.listTitle}
          >
            Key features:
          </motion.h3>
          <ul className={styles.list}>
            <motion.li
              {...createMotionConfig('down', 0.2)}
              className={styles.listItem}
            >
              <b>Comprehensive information:</b> Users will have access to clear
              and concise information about emotional intelligence. The
              application will provide precise definitions and clear
              explanations to help users understand fundamental concepts.
            </motion.li>
            <motion.li
              {...createMotionConfig('down', 0.2)}
              className={styles.listItem}
            >
              <b>Practical tips:</b> The app will offer practical tips and
              recommendations related to managing emotions in everyday
              situations. These tips will be based on solid research and can be
              easily applied in daily life.
            </motion.li>
            <motion.li
              {...createMotionConfig('down', 0.2)}
              className={styles.listItem}
            >
              <b>Interactive exercises:</b> Users will be able to participate in
              a series of exercises specifically designed to practice and
              develop emotional intelligence. These practical exercises will
              help users apply the concepts learned in real-life situations,
              thereby improving their ability to handle complex emotions.
            </motion.li>
            <motion.li
              {...createMotionConfig('down', 0.2)}
              className={styles.listItem}
            >
              <b>User-friendly interface:</b> The application will have an
              intuitive and attractive user interface that facilitates
              navigation and access to content. Users will easily find the
              information they are looking for and participate in exercises with
              ease.
            </motion.li>
          </ul>
        </div>
      </ProjectSection>

      <ProjectSection title="Sitemap" orientation="col">
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={`${styles.paragraph} ${styles.col}`}
        >
          We conducted a short tree testing survey to structure the information
          in our app. Based on the results, we decided to divide it into three
          main categories: Home, where users can access suggested material;
          Thoughts, which are notes users can create, read, and manage; and
          Emotional Competencies, which includes a framework of the five key
          emotional competencies proposed by Rafael Bisquerra, each containing a
          series of lectures.
        </motion.p>
        <motion.figure
          {...createMotionConfig('down', 0.2)}
          className={styles.figure}
        >
          <img
            className={styles.image}
            src={projectData.images.sitemap.src}
            alt={projectData.images.sitemap.alt}
            loading="lazy"
            decoding="async"
          />
        </motion.figure>
      </ProjectSection>

      <ProjectSection title="Style guide" orientation="col">
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={`${styles.paragraph} ${styles.col}`}
        >
          The color palette was chosen to create a positive and engaging
          experience. The combination of warm yellow, fresh green, and vibrant
          blue tones brings energy and clarity, while the neutral gray maintains
          a clean and balanced design. Together, these colors evoke feelings of
          optimism and trust.
        </motion.p>
        <motion.figure
          {...createMotionConfig('down', 0.2)}
          className={styles.figure}
        >
          <img
            className={styles.image}
            src={projectData.images.styleGuide.src}
            alt={projectData.images.styleGuide.alt}
            loading="lazy"
            decoding="async"
          />
        </motion.figure>
      </ProjectSection>
    </main>
  );
}

export default Emoiq;
