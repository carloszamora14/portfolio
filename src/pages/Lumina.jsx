import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import Paragraph from '../components/Paragraph/Paragraph';
import mockups from '../assets/lumina/mockups.png';
import sprintBacklog from '../assets/lumina/sprint-backlog.png';
import styleGuide from '../assets/lumina/style-guide.png';

function Lumina() {
  return (
    <main>
      <ProjectHeader
        heading="Lumina"
        subheading="Prototype designed to help prevent gender-based violence"
      />
      <div
        className="container"
        style={{
          margin: '2rem auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={mockups} alt="" style={{ width: '100%' }} />
      </div>

      <section className="container">
        <Paragraph title="What is Lumina">
          <p style={{ fontSize: '1rem', lineHeight: '150%' }}>
            A prototype of a mobile application aimed at preventing gender-based
            violence through a panic button that allows users to report abuse
            and dangerous situations in everyday life. Additionally, it provides
            access to maps with color-coded zones, highlighting areas with
            varying levels of risk. The app aims to identify high-risk areas and
            promote greater physical and overall safety for women and girls.
          </p>
        </Paragraph>
        <Paragraph title="Purpose">
          <p
            style={{ marginTop: '1rem', fontSize: '1rem', lineHeight: '150%' }}
          >
            We care about the mental and physical well-being of all Mexican
            women and girls. They all deserve to live in peace, security, and
            fulfillment. Our app is a tool to break the chains of violence
            imposed on women by society through a tool that provides immediate
            help and risk-level mapping.
          </p>
        </Paragraph>
        <Paragraph title="Development process" />

        <p
          style={{
            marginTop: '1rem',
            fontSize: '1rem',
            lineHeight: '150%',
            maxWidth: '75%',
          }}
        >
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
        <img
          src={sprintBacklog}
          alt="Trello board with showing the different tasks in each sprint backlog"
          style={{ width: '100%', marginTop: '2rem' }}
        />
        <Paragraph title="My contribution">
          <p
            style={{
              fontSize: '1rem',
              lineHeight: '150%',
            }}
          >
            In our team, everyone participated in defining the functional and
            non-functional requirements, creating the product backlog and sprint
            backlog, and deciding on user interface elements, color palette, and
            early mockups.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: '150%',
              marginTop: '1rem',
            }}
          >
            I specifically focused on the signup process, which involved several
            steps for users to complete before using the app. First, users fill
            out a form with their name, CURP, birthdate, and password. Then,
            they provide medical information, such as allergies and blood type,
            and add trusted contacts who will be notified if they find
            themselves in a dangerous situation. Additionally, I was responsible
            for the profile screen, where users can edit their information.
          </p>
        </Paragraph>
        <Paragraph title="Style guide" />
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '150%',
            maxWidth: '75%',
            marginTop: '1rem',
          }}
        >
          The color palette for Lumina reflects warmth, empathy, and
          empowerment, using soft tones to evoke calm and safety, while bolder
          purples emphasize strength. For the typography, Dongle offers a
          rounded, approachable feel for readability, while Mitr adds a clean,
          structured touch to keep the design modern and clear. Both fonts
          ensure the app remains easy to navigate and user-friendly.
        </p>
        <img
          src={styleGuide}
          alt="Fonts and color palette used in the Lumina prototype"
          style={{ width: '100%', margin: '2rem 0 3rem' }}
        />
      </section>
    </main>
  );
}

export default Lumina;
