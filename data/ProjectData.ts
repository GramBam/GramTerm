export type ProjectData = { img: string, title: string, info: string, link: string, stack: string, github: string }

export const projects: ProjectData[] = [
  {
    img: '/assets/images/projects/language-cards.png',
    title: "Language Cards",
    info: 'A simple app to help people learn Mandarin! Includes text to speech, and Mandarin to English functionality!',
    link: 'https://splendid-muffin-c70707.netlify.app/',
    stack: '[React]',
    github: 'https://github.com/GramBam/language-cards'
  },
  {
    img: '/assets/images/projects/github-finder.png',
    title: "Github Finder",
    info: 'A nice UI to help search and display Github users, using the Github API',
    link: 'https://github-finder-l97ug1adj-grambam.vercel.app/user/GramBam',
    stack: '[React, Tailwind, Github API]',
    github: 'https://github.com/GramBam/github-finder'
  },
  {
    img: '/assets/images/projects/current-site.png',
    title: "This Portfolio",
    info: 'My 2022 Portfolio themed after windows 95. Lots of potential for cool features and easter eggs. Always a blast to work on.',
    link: '',
    stack: '[Next.js, React, Typescript]',
    github: 'https://github.com/GramBam/portfolio-2022'
  },
  {
    img: '/assets/images/projects/twitter-bot.png',
    title: "Toronto Job Twitter Bot",
    info: 'My Twitter Bot from 2018 which uses the Twitter API. Retweets posts with #jobs and #toronto tags every 10 minutes. Over 10,000 retweets and 100 followers!',
    link: '',
    stack: '[Javascript, Twitter API]',
    github: 'https://github.com/GramBam/toronto-job-twitter-bot'
  },
]
