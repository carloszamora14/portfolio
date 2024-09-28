import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import Paragraph from '../components/Paragraph/Paragraph';
import projects from '../data/projects';

function DailyUIChallenge() {
  const projectData = projects.find(
    project => project.projectName === 'Daily UI Challenge',
  );

  return (
    <main>
      <ProjectHeader
        heading="Daily UI challenge"
        subheading="A fun challenge for improving my design skills and creativity"
      />
      <div
        className="container"
        style={{
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={projectData.images.website.src}
          alt={projectData.images.website.alt}
          style={{ width: '100%' }}
        />
      </div>

      <Paragraph title="About">
        <p style={{ fontSize: '1rem', lineHeight: '150%' }}>
          The Daily UI Challenge is an initiative by Hype4 Academy aimed at the
          UI design community to encourage competition and help designers
          improve their skills through daily UI exercises. I participated in
          this 90-day challenge by creating and sharing a design each day that
          met the provided description and goals.
        </p>
      </Paragraph>
      <Paragraph title="Learning experiences" orientation="col">
        <p style={{ fontSize: '1rem', lineHeight: '150%' }}>
          Over the course of three months, the experience was both fun and
          unpredictable, as each day&apos;s challenge introduced a new and
          diverse design task. The topics varied widely, including designs like
          a smartwatch sleep-tracking interface, an alarm clock app, an FM radio
          screen, a sound recorder, a calculator, a credit card payment screen,
          a smart fridge UI, and a TV interface for a movie streaming app.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '150%', marginTop: '1rem' }}>
          I frequently conducted research, looking for references, inspiration,
          and color palettes to develop my own design solutions. On average, I
          spent around 2 hours daily on this project, and I&apos;m glad I did—it
          greatly enhanced my design skills. I gained a deeper understanding of
          core principles such as spacing, alignment, typography hierarchy, and
          contrast. Additionally, I developed proficiency in Figma, as all of my
          designs were created using this tool.
        </p>
        <img
          style={{ width: '100%', margin: '2rem 0 3rem' }}
          src={projectData.images.showcase.src}
          alt={projectData.images.showcase.alt}
          loading="lazy"
          decoding="async"
        />
      </Paragraph>
    </main>
  );
}

export default DailyUIChallenge;
