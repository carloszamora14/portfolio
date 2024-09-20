import Gallery from '../components/Gallery/Gallery';
import image1 from '../assets/movie-finder/cover.png';
import image2 from '../assets/movie-finder/1.png';
import image3 from '../assets/movie-finder/2.png';
import styleGuide from '../assets/movie-finder/style-guide.png';

import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import Paragraph from '../components/Paragraph/Paragraph';

function MovieFinder() {
  const images = [
    { src: image1, alt: '' },
    { src: image2, alt: '' },
    { src: image3, alt: '' },
  ];
  return (
    <main>
      <ProjectHeader heading="Movie Finder" subheading="2D adventure game" />
      <Gallery images={images} />;
      <section className="container">
        <Paragraph title="About">
          <p style={{ fontSize: '1rem', lineHeight: '150%' }}>
            As part of my final project for the Dev.F bootcamp, I developed a
            web application that integrates with the IMDb API to display and
            explore movies. Below are the main requirements and functionalities
            of the project.
          </p>
        </Paragraph>
        <Paragraph title="Requirements">
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#815C7F',
            }}
          >
            Functional requirements:
          </h3>
          <ul style={{ padding: '1rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '1rem' }}>
              View and search for movies using the IMDB API.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              Display detailed information about the selected movie, such as
              cast, director, and plot summary.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              Filter movies by user ratings to allow for a more personalized
              search experience.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              Implement pagination for movie search results to navigate between
              pages of data easily.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              Host the application on a live server so it is accessible via the
              internet.
            </li>
          </ul>
          <h3
            style={{
              marginTop: '2rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#815C7F',
            }}
          >
            Non-functional requirements:
          </h3>
          <ul style={{ padding: '1rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '1rem' }}>
              Use a user-friendly color scheme to create an enjoyable
              experience.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              Include a navigation bar for easy access to different sections of
              the site, as well as a footer with developer contact information.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              Show error messages when there is an issue fetching data from the
              API, ensuring users are aware of any problems.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              Ensure the design of the page is responsive, adapting to various
              screen sizes and devices for a smooth user experience.
            </li>
          </ul>
        </Paragraph>

        <Paragraph title="Style guide"></Paragraph>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '150%',
            maxWidth: '75%',
            marginTop: '1rem',
          }}
        >
          I chose Open Sans for its modern and clean look, making it easy to
          read on all screen sizes. The color palette includes a light
          background to keep the interface bright and friendly, while a dark
          color for the text ensures good contrast and readability. I used some
          accent colors to highlight important elements without making the
          design too busy
        </p>
        <img src={styleGuide} alt="" style={{ margin: '3rem 0' }} />
      </section>
    </main>
  );
}

export default MovieFinder;
