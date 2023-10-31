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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
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
    title: "Web Developement",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
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
];

const experiences = [
  {
    title: "Full Stack",
    company_name: "Seven Mentor",
    icon: starbucks,
    iconBg: "#FFF",
    date: "Augest 2022 - January 2023",
    points: [
      "Full stack internship offers comprehensive skill development in front-end and back-end technologies, enhancing proficiency in HTML/CSS, JavaScript, databases, and server-side programming.",
      "Full stack internships provide exposure to the full development lifecycle, honing problem-solving skills, fostering collaboration, and enabling code troubleshooting and optimization.",
      "Full stack internships offer hands-on experience in resolving challenges, improving debugging skills, and optimizing code efficiency for web applications.",
      "Full stack internships offer the chance to enhance teamwork, project management, and agile development skills by effectively communicating and collaborating with various team members and stakeholders.",
    ],
  },
  {
    title: "Software Developer Intern (React)",
    company_name: "Senwell Solutions",
    icon: tesla,
    iconBg: "#FFF",
    date: "April 2023 - October 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Car hub",
    description:
      "A React (Next.js) powered web platform with MongoDB integration and sleek Tailwind CSS design, providing seamless car rental search, booking, and management.",
    tags: [
      {
        name: "react (Next)",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Prasad10082000/car_hub-app",
  },
  {
    name: "Movies Explore",
    description:
      "A React (Next.js) powered web app utilizing RapidAPI for comprehensive movie data, offering an immersive movie exploration experience through intuitive search and stylish CSS design.",
    tags: [
      {
        name: "react (Next)",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Prasad10082000/Netflix",
  },
  {
    name: "Filpkart Clone",
    description:
      "A robust e-commerce platform like Flipkart, using React.js, MongoDB, and Material UI, offers seamless browsing, searching, and purchasing with stunning visuals.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
