import Gallery from '../components/Gallery/Gallery';
import image1 from '../assets/oh-my-deer/1.png';
import image2 from '../assets/oh-my-deer/3.png';
import image3 from '../assets/oh-my-deer/7.png';

import image4 from '../assets/oh-my-deer/4.png';
import image5 from '../assets/oh-my-deer/6.png';
import image6 from '../assets/oh-my-deer/9.png';
import image7 from '../assets/oh-my-deer/10.png';

import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import Paragraph from '../components/Paragraph/Paragraph';

function OhMyDeer() {
  const images = [
    { src: image1, alt: '' },
    { src: image2, alt: '' },
    { src: image3, alt: '' },
  ];
  return (
    <main>
      <ProjectHeader heading="Oh my deer" subheading="2D adventure game" />
      <Gallery images={images} />;
      <Paragraph title="The problem">
        <p style={{ fontSize: '1rem', lineHeight: '150%' }}>
          Excessive and unsustainable hunting, as well as poaching, have led to
          an alarming decline in the populations of various species, some of
          which are endangered. This phenomenon not only disrupts the ecological
          balance but also raises ethical and moral concerns in modern society.
          The growing pressure to preserve biodiversity and respect animal
          rights has increased awareness and social criticism of hunting,
          driving initiatives to promote more sustainable and ethical practices,
          as well as the protection of natural habitats. However, these efforts
          are not enough to deter those who engage in hunting for economic gain.
        </p>
      </Paragraph>
      <Paragraph title="Approach">
        <p style={{ fontSize: '1rem', lineHeight: '150%' }}>
          My video game aims to use <b>&quot;fear appeal&quot;</b>, a persuasion
          technique that threatens the audience with a negative consequence,
          whether physical, psychological, or social, that is likely to occur if
          they engage in a particular behavior. In this case, I aim to vividly
          illustrate the issue of animal hunting by having the player experience
          firsthand the hardships and inhumane treatment faced by some
          endangered species due to illegal hunting.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '150%' }}>
          While it may seem like an unusual approach to address this problem, I
          believe it allows me to leverage audiovisual elements in a way that
          immerses the player in the game, encouraging them to pay close
          attention to this issue.
        </p>
      </Paragraph>
      <Paragraph title="Gameplay">
        <p style={{ fontSize: '1rem', lineHeight: '150%' }}>
          In this game, we take on the role of a white-tailed deer whose mission
          is to escape from a hunter determined to kill it. The actions
          available to the player include moving forward, backward, jumping, and
          eating. The hunter, armed with a rifle, constantly shoots at us while
          we remain within a defined area. Additionally, if we get too close,
          the hunter can inflict damage through kicks or strikes.
        </p>
      </Paragraph>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(24rem, 1fr))',
          gap: '1rem',
          margin: '3rem auto',
        }}
      >
        <img src={image7} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>
    </main>
  );
}

export default OhMyDeer;
