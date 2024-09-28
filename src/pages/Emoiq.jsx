import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import Paragraph from '../components/Paragraph/Paragraph';
import projects from '../data/projects';

function Emoiq() {
  const projectData = projects.find(project => project.projectName === 'EmoIQ');

  return (
    <main>
      <ProjectHeader
        heading="EmoIQ"
        subheading="App for improving emotional intelligence"
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
          src={projectData.images.mockups.src}
          alt={projectData.images.mockups.alt}
          style={{ width: '45%', maxWidth: '30rem' }}
        />
      </div>

      <Paragraph title="Problem">
        <p style={{ fontSize: '1rem', lineHeight: '150%' }}>
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
        </p>
      </Paragraph>
      <Paragraph title="Our solution">
        <p style={{ marginTop: '1rem', fontSize: '1rem', lineHeight: '150%' }}>
          A mobile application specifically designed for learning and enhancing
          emotional intelligence. Users will have access to a variety of
          carefully selected resources, including relevant information and
          practical exercises. The primary goal of the application is to improve
          interpersonal relationships by helping users understand and manage
          their emotions effectively.
        </p>

        <h3
          style={{
            marginTop: '2rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#815C7F',
          }}
        >
          Key Features:
        </h3>
        <ul style={{ padding: '1rem', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Comprehensive Information:</strong> Users will have access
            to clear and concise information about emotional intelligence. The
            application will provide precise definitions and clear explanations
            to help users understand fundamental concepts.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Practical Tips:</strong> The app will offer practical tips
            and recommendations related to managing emotions in everyday
            situations. These tips will be based on solid research and can be
            easily applied in daily life.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Interactive Exercises:</strong> Users will be able to
            participate in a series of exercises specifically designed to
            practice and develop emotional intelligence. These practical
            exercises will help users apply the concepts learned in real-life
            situations, thereby improving their ability to handle complex
            emotions.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>User-Friendly Interface:</strong> The application will have
            an intuitive and attractive user interface that facilitates
            navigation and access to content. Users will easily find the
            information they are looking for and participate in exercises with
            ease.
          </li>
        </ul>
      </Paragraph>
      <Paragraph title="Sitemap" orientation="col">
        <p style={{ fontSize: '1rem', lineHeight: '150%', marginTop: '1rem' }}>
          We conducted a short tree testing survey to structure the information
          in our app. Based on the results, we decided to divide it into three
          main categories: Home, where users can access suggested material;
          Thoughts, which are notes users can create, read, and manage; and
          Emotional Competencies, which includes a framework of the five key
          emotional competencies proposed by Rafael Bisquerra, each containing a
          series of lectures.
        </p>
        <img
          style={{ width: '100%' }}
          src={projectData.images.sitemap.src}
          alt={projectData.images.sitemap.alt}
        />
      </Paragraph>
      <Paragraph title="Style guide" orientation="col">
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '150%',
            maxWidth: '75%',
            marginTop: '1rem',
          }}
        >
          The color palette was chosen to create a positive and engaging
          experience. The combination of warm yellow, fresh green, and vibrant
          blue tones brings energy and clarity, while the neutral gray maintains
          a clean and balanced design. Together, these colors evoke feelings of
          optimism and trust.
        </p>
        <img
          style={{ width: '100%', margin: '2rem 0 3rem' }}
          src={projectData.images.styleGuide.src}
          alt={projectData.images.styleGuide.alt}
        />
      </Paragraph>
    </main>
  );
}

export default Emoiq;
