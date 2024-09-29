import { motion } from 'framer-motion';
import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import projects from '../data/projects';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
import createMotionConfig from '../utils/fadeIn';
import styles from '../styles/ProjectPage.module.css';

function DailyUIChallenge() {
  const projectData = projects.find(
    project => project.projectName === 'Daily UI Challenge',
  );

  return (
    <main>
      <ProjectHeader
        heading="Daily UI Challenge"
        subheading="A fun challenge for improving my design skills and creativity"
      />

      <motion.figure
        {...createMotionConfig('down', 0.2)}
        className={`container ${styles.figureContainer}`}
      >
        <img
          className={styles.image}
          src={projectData.images.website.src}
          alt={projectData.images.website.alt}
        />
      </motion.figure>

      <ProjectInfo projectInfo={projectData.info} />

      <ProjectSection title="About">
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={styles.paragraph}
        >
          The Daily UI Challenge is an initiative by Hype4 Academy aimed at the
          UI design community to encourage competition and help designers
          improve their skills through daily UI exercises. I participated in
          this 90-day challenge by creating and sharing a design each day that
          met the provided description and goals.
        </motion.p>
      </ProjectSection>

      <ProjectSection title="Learning experiences" orientation="col">
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={`${styles.paragraph} ${styles.col}`}
        >
          Over the course of three months, the experience was both fun and
          unpredictable, as each day&apos;s challenge introduced a new and
          diverse design task. The topics varied widely, including designs like
          a smartwatch sleep-tracking interface, an alarm clock app, an FM radio
          screen, a sound recorder, a calculator, a credit card payment screen,
          a smart fridge UI, and a TV interface for a movie streaming app.
        </motion.p>
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={`${styles.paragraph} ${styles.col}`}
        >
          I frequently conducted research, looking for references, inspiration,
          and color palettes to develop my own design solutions. On average, I
          spent around 2 hours daily on this project, and I&apos;m glad I did—it
          greatly enhanced my design skills. I gained a deeper understanding of
          core principles such as spacing, alignment, typography hierarchy, and
          contrast. Additionally, I developed proficiency in Figma, as all of my
          designs were created using this tool.
        </motion.p>
        <motion.figure
          {...createMotionConfig('down', 0.2, 0.1)}
          className={styles.figure}
        >
          <img
            className={styles.image}
            src={projectData.images.showcase.src}
            alt={projectData.images.showcase.alt}
            loading="lazy"
            decoding="async"
          />
        </motion.figure>
      </ProjectSection>
    </main>
  );
}

export default DailyUIChallenge;
