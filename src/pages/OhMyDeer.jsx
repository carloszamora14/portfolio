import { motion } from 'framer-motion';
import Gallery from '../components/Gallery/Gallery';
import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import projects from '../data/projects';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
import createMotionConfig from '../utils/fadeIn';
import styles from '../styles/ProjectPage.module.css';

function OhMyDeer() {
  const projectData = projects.find(
    project => project.projectName === 'Oh My Deer',
  );

  return (
    <main>
      <ProjectHeader heading="Oh My Deer" subheading="2D adventure game" />
      <Gallery images={projectData.images.gallery} />
      <ProjectInfo projectInfo={projectData.info} />
      <ProjectSection title="The problem">
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={styles.paragraph}
        >
          Excessive and unsustainable hunting, as well as poaching, have led to
          an alarming decline in the populations of various species, some of
          which are endangered. This phenomenon not only disrupts the ecological
          balance but also raises ethical and moral concerns in modern society.
          The growing pressure to preserve biodiversity and respect animal
          rights has increased awareness and social criticism of hunting,
          driving initiatives to promote more sustainable and ethical practices,
          as well as the protection of natural habitats. However, these efforts
          are not enough to deter those who engage in hunting for economic gain.
        </motion.p>
      </ProjectSection>
      <ProjectSection title="Approach">
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={styles.paragraph}
        >
          My video game aims to use <b>fear appeal</b>, a persuasion technique
          that threatens the audience with a negative consequence, whether
          physical, psychological, or social, that is likely to occur if they
          engage in a particular behavior. In this case, I aim to vividly
          illustrate the issue of animal hunting by having the player experience
          firsthand the hardships and inhumane treatment faced by some
          endangered species due to illegal hunting.
        </motion.p>
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={styles.paragraph}
        >
          While it may seem like an unusual approach to address this problem, I
          believe it allows me to leverage audiovisual elements in a way that
          immerses the player in the game, encouraging them to pay close
          attention to this issue.
        </motion.p>
      </ProjectSection>
      <ProjectSection title="Gameplay">
        <motion.p
          {...createMotionConfig('down', 0.2)}
          className={styles.paragraph}
        >
          In this game, we take on the role of a white-tailed deer whose mission
          is to escape from a hunter determined to kill it. The actions
          available to the player include moving forward, backward, jumping, and
          eating. The hunter, armed with a rifle, constantly shoots at us while
          we remain within a defined area. Additionally, if we get too close,
          the hunter can inflict damage through kicks or strikes.
        </motion.p>
      </ProjectSection>
      <div className={`container ${styles.grid}`}>
        {projectData.images.grid.map((img, index) => (
          <motion.img
            {...createMotionConfig('down', 0.2 + 0.15 * index)}
            key={index}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </main>
  );
}

export default OhMyDeer;
