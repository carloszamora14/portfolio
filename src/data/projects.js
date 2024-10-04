import luminaCover from '../assets/lumina/cover.png';
import luminaMockups from '../assets/lumina/mockups.png';
import luminaSprintBacklog from '../assets/lumina/sprint-backlog.png';
import luminaStyleGuide from '../assets/lumina/style-guide.png';

import dailyChallengeCover from '../assets/daily-ui-challenge/cover.png';
import dailyChallengeWebsite from '../assets/daily-ui-challenge/website.png';
import dailyChallengeShowcaseLowRes from '../assets/daily-ui-challenge/showcase-1440.png';
import dailyChallengeShowcaseMediumRes from '../assets/daily-ui-challenge/showcase-2560.png';
import dailyChallengeShowcaseHighRes from '../assets/daily-ui-challenge/showcase-4000.png';

import emoiqCover from '../assets/emoiq/cover.png';
import emoiqMockups from '../assets/emoiq/mockups.png';
import emoiqSitemap from '../assets/emoiq/sitemap.png';
import emoiqStyleGuide from '../assets/emoiq/style-guide.png';

import ohMyDeerCover from '../assets/oh-my-deer/cover.png';
import ohMyDeerGallery1 from '../assets/oh-my-deer/gallery1.png';
import ohMyDeerGallery2 from '../assets/oh-my-deer/gallery2.png';
import ohMyDeerGallery3 from '../assets/oh-my-deer/gallery3.png';
import ohMyDeerGrid1 from '../assets/oh-my-deer/grid1.png';
import ohMyDeerGrid2 from '../assets/oh-my-deer/grid2.png';
import ohMyDeerGrid3 from '../assets/oh-my-deer/grid3.png';
import ohMyDeerGrid4 from '../assets/oh-my-deer/grid4.png';

import donaBikesCover from '../assets/dona-bikes/cover.png';
import donaBikesMockup from '../assets/dona-bikes/mockup.png';
import donaBikesTaskFlow from '../assets/dona-bikes/task-flow.png';
import donaBikesLofi from '../assets/dona-bikes/lofi.png';
import donaBikesStyleGuide from '../assets/dona-bikes/style-guide.png';

import movieFinderWebsite1 from '../assets/movie-finder/website1.png';
import movieFinderWebsite2 from '../assets/movie-finder/website2.png';
import movieFinderWebsite3 from '../assets/movie-finder/website3.png';
import movieFinderStyleGuide from '../assets/movie-finder/style-guide.png';

const projects = [
  {
    projectName: 'Lumina',
    description:
      'A Framer prototype designed to help prevent gender-based violence with a panic button feature.',
    url: '/lumina',
    info: {
      tools: {
        title: 'Technologies and tools used',
        data: 'Framer, Trello, Google Maps API',
      },
      links: {
        title: 'Useful links',
        data: [
          {
            text: 'Framer prototype',
            url: 'https://framer.com/share/Lumina--6GzRhTjnlyaKSubc3N4a/SxpIYKvr5',
          },
        ],
      },
    },
    images: {
      cover: {
        src: luminaCover,
        alt: 'Mobile app prototype showcasing the panic button, home, and profile screens of Lumina.',
      },
      mockups: {
        src: luminaMockups,
        alt: 'Mockups of three mobile phones showing the Risk maps, Login, and Panic button screens of the Lumina app.',
      },
      sprintBacklog: {
        src: luminaSprintBacklog,
        alt: 'Trello board displaying the different tasks in each sprint backlog for the Lumina project.',
      },
      styleGuide: {
        src: luminaStyleGuide,
        alt: 'Style guide outlining the typography (Dongle and Mitr) and color scheme (orange and various shades of purple and pink) used in the Lumina application.',
      },
    },
  },
  {
    projectName: 'Daily UI Challenge',
    description:
      'A collection of daily UI designs aimed at improving my design skills and creativity.',
    url: '/daily-ui-challenge',
    info: {
      tools: {
        title: 'Design tools and practices used',
        data: 'Figma, UI design principles',
      },
      links: {
        title: 'Useful links',
        data: [
          {
            text: 'Website with all my designs',
            url: 'https://carloszamora14.github.io/daily-ui-challenge/',
          },
          {
            text: 'My Hype4 Academy profile',
            url: 'https://hype4.academy/profile/carlos',
          },
        ],
      },
    },
    images: {
      cover: {
        src: dailyChallengeCover,
        alt: 'Showcase of various mobile app UI designs created during the Daily UI Challenge.',
      },
      website: {
        src: dailyChallengeWebsite,
        alt: 'Website displaying a scrollable carousel of all the UI designs created in this project.',
      },
      showcase: {
        src: {
          lowRes: dailyChallengeShowcaseLowRes,
          mediumRes: dailyChallengeShowcaseMediumRes,
          highRes: dailyChallengeShowcaseHighRes,
        },
        alt: '4-column grid of a collection of mobile UI designs from different types of applications.',
      },
    },
  },
  {
    projectName: 'EmoIQ',
    description:
      'A mobile app focused on learning and improving emotional intelligence through engaging activities.',
    url: '/emoiq',
    info: {
      tools: {
        title: 'Technologies and practices used',
        data: 'Figma, user-centered design, WCAG, React Native, Firebase',
      },
    },
    images: {
      cover: {
        src: emoiqCover,
        alt: 'Home screen of the EmoIQ mobile application, focused on emotional intelligence learning.',
      },
      mockups: {
        src: emoiqMockups,
        alt: 'Mockups of two mobile phones showing the onboarding screen and a screen asking the user how they feel in the EmoIQ app.',
      },
      sitemap: {
        src: emoiqSitemap,
        alt: 'Tree hierarchy showing the different sections of the EmoIQ app, divided into Home, Thoughts, and Emotional Competencies.',
      },
      styleGuide: {
        src: emoiqStyleGuide,
        alt: 'Style guide outlining the typography (Gg Sans) and color scheme (warm yellow, fresh green, and vibrant blue tones) used in the EmoIQ application.',
      },
    },
  },
  {
    projectName: 'Oh My Deer',
    description:
      'A 2D adventure game that raises awareness about the impact of animal hunting on wildlife.',
    url: '/oh-my-deer',
    info: {
      tools: {
        title: 'Technologies used',
        data: 'Godot engine, GDScript programming language',
      },
      links: {
        title: 'Useful links',
        data: [
          {
            text: 'GitHub repository',
            url: 'https://github.com/carloszamora14/oh-my-deer',
          },
          {
            text: 'Game online',
            url: 'https://carloszamora.itch.io/oh-my-deer',
          },
        ],
      },
    },
    images: {
      cover: {
        src: ohMyDeerCover,
        alt: 'Silhouette of a deer standing on a cliff with tall pine trees to the left, mountains in the background, and birds flying in the sky.',
      },
      gallery: [
        {
          src: ohMyDeerGallery1,
          alt: 'Pixel art from "Oh My Deer" featuring a crow on a deer in a red-toned forest. The top left shows a health meter and a hunger bar. Movement controls are displayed on the right.',
        },
        {
          src: ohMyDeerGallery2,
          alt: 'Pixel art from "Oh My Deer" showing a hunter aiming a rifle at a deer running across a bridge, with a sunset background.',
        },
        {
          src: ohMyDeerGallery3,
          alt: 'Pixel art from "Oh My Deer" depicting a wolf and a deer standing on a cliff at night, with a dark forest in the background.',
        },
      ],
      grid: [
        {
          src: ohMyDeerGrid1,
          alt: 'Pixel art from "Oh My Deer" of a deer standing on top of an orange car in a red forest, with a message at the bottom saying "Good morning, ladies and gentlemen!"',
        },
        {
          src: ohMyDeerGrid2,
          alt: 'Pause menu with "Continue" and "Exit" options for the game.',
        },
        {
          src: ohMyDeerGrid3,
          alt: 'Pixel art from "Oh My Deer" of a deer next to grass, prompted by an icon to eat and decrease hunger.',
        },
        {
          src: ohMyDeerGrid4,
          alt: 'Pixel art from "Oh My Deer" of a hunter who has shot a wolf next to a deer, with a text box below saying "Coyotes gotta eat."',
        },
      ],
    },
  },
  {
    projectName: 'Dona Bikes',
    description:
      'A design and prototype created in Figma for a fictional bike shop.',
    url: '/dona-bikes',
    vimeoUrl:
      'https://player.vimeo.com/video/896413374?badge=0&amp;autopause=0',
    info: {
      tools: {
        title: 'Design tools and practices used',
        data: 'Figma, user experience principles',
      },
      links: {
        title: 'Useful links',
        data: [
          {
            text: 'Figma prototype',
            url: 'https://www.figma.com/proto/gCPR1LWbJgdy3C0fHCuGh6/Dona-Bike-v1?node-id=83-136&node-type=page&scaling=contain&page-id=83%3A96&starting-point-node-id=83%3A136',
          },
        ],
      },
    },
    images: {
      cover: {
        src: donaBikesCover,
        alt: 'Home screen of the Dona Bikes mobile application.',
      },
      mockup: {
        src: donaBikesMockup,
        alt: 'Mockup showing a close-up view of the Dona Bikes app on a mobile phone.',
      },
      taskFlow: {
        src: donaBikesTaskFlow,
        alt: 'A task flow outlining the four step process for purchasing a bike: Homepage, product features, checkout, and corfirmation',
      },
      lofi: {
        src: donaBikesLofi,
        alt: 'Lo-fi wireframe of the Dona Bikes application, presenting the layout and structure before detailed design.',
      },
      styleGuide: {
        src: donaBikesStyleGuide,
        alt: 'Style guide outlining the typography (Quicksand and Open Sans) and color scheme (white, black, and light shades of green, red, cream, and aqua) used in the Dona Bikes design.',
      },
    },
  },
  {
    projectName: 'Movie Finder',
    description:
      'A web application that allows users to search and find movie information through an intuitive interface.',
    url: '/movie-finder',
    info: {
      tools: {
        title: 'Technologies and tools used',
        data: 'React, React Router DOM, SASS, IMDB API',
      },
      links: {
        title: 'Useful links',
        data: [
          {
            text: 'Live website',
            url: 'https://movie-finder-cz.netlify.app/',
          },
        ],
      },
    },
    images: {
      cover: {
        src: movieFinderWebsite1,
        alt: 'Home screen of the Movie Finder application.',
      },
      gallery: [
        {
          src: movieFinderWebsite1,
          alt: 'Home screen of the Movie Finder application.',
        },
        {
          src: movieFinderWebsite2,
          alt: 'Search results page displaying a search bar at the top and a grid of results for the keyword "X-Men" below.',
        },
        {
          src: movieFinderWebsite3,
          alt: 'Detailed movie page for "Bad Boys for Life," highlighting the synopsis, ratings, revenue, and options to explore similar movies and cast information.',
        },
      ],
      styleGuide: {
        src: movieFinderStyleGuide,
        alt: 'Style guide outlining the typography (Open Sans) and color scheme (light grey, dark teal, indigo, pale blue, muted purple, and pale yellow) used in the Movie Finder application',
      },
    },
  },
];

export default projects;
