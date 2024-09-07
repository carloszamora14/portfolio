import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutText}>
          Hi, I&apos;m [Your Name], a passionate [Your Profession or Specialty]
          with a love for [Your Interests or Hobbies]. I specialize in creating
          innovative and effective solutions that help people achieve their
          goals. With a background in [Your Background or Experience], I bring a
          unique perspective to every project.
        </p>
        <p className={styles.aboutText}>
          My journey began in [Year or Start of Career], and since then,
          I&apos;ve had the pleasure of working on a variety of exciting
          projects. I&apos;m dedicated to continuous learning and staying up-to-date
          with the latest trends and technologies in my field.
        </p>
        <p className={styles.aboutText}>
          When I&apos;m not working, you can find me [Describe Hobbies or
          Interests]. Feel free to reach out if you&apos;d like to connect or
          collaborate on a project!
        </p>
      </div>
    </section>
  );
}

export default About;
