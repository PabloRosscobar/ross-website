import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  blender,
  lightroom,
  photoshop,
  python,
  golang,
  nikeScraper,
  monstaProxies,
  gymsite,
  threejs,
} from "../assets";
import Rossco_Logo2 from "../assets/Rossco_Logo2.png";
import chameleon from "../assets/chameleon.png";
import fleek from "../assets/fleek.png";

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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Photographer",
    icon: creator,
  },
  {
    title: "Blender Artist",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "HTML 5",
    icon: html,
  },
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
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Lightroom",
    icon: lightroom,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
];

const experiences = [
  {
    title: "Lead Backend Developer",
    company_name: "Chameleon IO",
    icon: chameleon,
    iconBg: "#383E56",
    date: "April 2020 - February 2021",
    points: [
      "Developing and maintaining application using Python and other related technologies.",
      "Collaborating with other developers to create a high quality product.",
      "Daily code updates and new features.",
      "Communicating directly with end users and implementing improvements/features based off their feedback.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Fleek AIO",
    icon: fleek,
    iconBg: "#E6DEDD",
    date: "February 2021 - December 2021",
    points: [
      "Collaborating with a larger team of developers in Golang, Python and JavaScript.",
      "Adding new software features and bug fixing existing code",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Self Employed",
    icon: Rossco_Logo2,
    iconBg: "#383E56",
    date: "Jan 2022 - present",
    points: ["Developing multiple small applications, Discord bots and API's."],
  },
];

const projects = [
  {
    name: "Nike Image Scraper",
    description:
      "A spython tool to allow users to scrape full resoultion product images from Nike's backend API for use on E-Commerce sites.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "requests",
        color: "green-text-gradient",
      },
      {
        name: "pyqt",
        color: "pink-text-gradient",
      },
    ],
    image: nikeScraper,
    source_code_Link:
      "https://github.com/PabloRosscobar/Nike_Backend_Image_Scraper",
  },
  {
    name: "Proxy Provider Discord Bot",
    description:
      "A Discord based bot for a proxy company that allows users to login using secure credentials & request specific proxies based on their input.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: monstaProxies,
    source_code_Link: "https://github.com/PabloRosscobar/discord-proxy-bot",
  },
  {
    name: "Gym Website",
    description:
      "A modern, fully responsive website with floating image assets built using Vite, Typescript and reacts.JS.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "reacts",
        color: "green-text-gradient",
      },
    ],
    image: gymsite,
    source_code_Link: "https://github.com/PabloRosscobar/gym-typescript",
  },
];

export { services, technologies, experiences, projects };
