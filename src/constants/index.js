import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  vue, 
  uiux,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  secureblink,
  tesla,
  shopify,
  ecommerce,
  chat,
  web3,
  score,
  textformat,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Vue Developer",
    icon: backend,
  },
  {
    title: "Learner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "uiux",
    icon: uiux,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Vue.js Developer",
    company_name: "Secure Blink",
    icon: secureblink,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Opensource Contributions",
    company_name: "Hacktoberfest-2022",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "Collaborating with various projects and other developers to create an impact via opensource",
      "Developing and improving many codebases via contributions.",
      "Made around 8 PRs and all of them got merged",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const projects = [
  {
    name: "FoodieFirst",
    description:
      "Food ordering website in which you can order and make real payment using upi",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "red-text-gradient",
      },
    ],
    image: foodiefirst,
    source_code_link: "https://foodie-first.vercel.app/",
  },
  {
    name: "Web3 Crowdfunding",
  {
    name: "E-Commerce",
    description:
      "E-commerce platform that allows users to search and buy various things online by just sitting at home",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "red-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/kkartik07/SnapKart-new",
  },
  {
    name: "Web3 Crowdfunding",
    description:
      "Creating a versatile Web3 crowdfunding platform with decentralized features and innovative tokenized incentives for diverse project fundraising.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "pink-text-gradient",
      },
      {
        name: "ethereum",
        color: "blue-text-gradient",
      },
    ],
    image: web3,
    source_code_link: "https://github.com/kkartik07/project_crowdfunding-master",
  },
  {
    name: "ScoreKeeper",
    description:
      "Website to account the score of you and your opponent. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: score,
    source_code_link: "https://github.com/kkartik07/ScoreKeeper",
  },
  {
    name: "Text Formatter",
    description:
      "A comprehensive website for formatting and getting basic information of the text",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: textformat,
    source_code_link: "https://github.com/kkartik07/PlayWithText",
  },
];

export { services, technologies, experiences, projects };
