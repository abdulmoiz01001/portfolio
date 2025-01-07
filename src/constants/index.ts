import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  figma,
  docker,
  eyexpro,
  starbucks,
  tesla,
  food,
  chat,
  husbar,
  shopify,
  carrent,
  jobit,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Next JS Developer",
    icon: backend,
  },
  {
    title: "Laravel Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Divine knots",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "March 2022 -  Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "SMIT",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "InnoBytes Services",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Web Developer",
    companyName: "Husbar",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Jan 2025",
    points: [
      "Contributed to enhancing Husbar's online presence by developing a fully responsive website with seamless navigation and user-friendly features.",
      "Implemented analytics tools for performance tracking, enabling data-driven decision-making for marketing strategies.",
      "Created interactive components to engage visitors effectively and improve user experience.",
      "Delivered solutions that resulted in increased client retention and measurable growth in online reach.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abdul Moiz proved me wrong.",
    name: "Assadullah",
    designation: "CEO",
    company: "Une Comp",
    image: "assadullah.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abdul Moiz does.",
    name: "Muhammad Hunain",
    designation: "CEO",
    company: "Divine Knots",
    image: "hunain.jpeg",
  },
  
];

const projects: TProject[] = [
  {
    name: "Une Comp",
    description:
      "Full Stack E-Commerce for University Students to Order online Project Compoennts and Resources they required for Project. Having efficient Performance and User Experience with use Full Regards.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    demoLink: "https://unecomp.site/",
    sourceCodeLink: "https://github.com/abdulmoiz01001/unecomp",
  },
    {
      name: "EyeX Pro",
      description:
        "A Full Stack Movies Web Application based on Mern Stack Technology. Embraing the Latest Technologies and Features to provide the best User Experience.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
        {
          name: "Express JS",
          color: "green-text-gradient",
        },
      ],
      image: eyexpro,
      demoLink: "https://eyexpro-1ae83.web.app/",
      sourceCodeLink: "https://github.com/abdulmoiz01001/eyexpro",
    },
  {
    name: "Divine knots",
    description:
      "Full Stack MERN Stack based Application of Divine Knots Start up NIC Hyderabad. Promoting the Event Management Service with the implimentation of AI Equilizer of Budget management.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    demoLink: "https://divineknots.org/",
    sourceCodeLink: "https://github.com/abdulmoiz01001/divineKnots-landing-page",
  },
  {
    name: "Food Application",
    description:
      "Full Stack Website that provides the best User Experience for the Food Lovers. Having the best User Interface and User Experience.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: food,
    demoLink: "http://abdulmoizawan.me/food-website/",
    sourceCodeLink: "https://github.com/abdulmoiz01001/food-website",
  },
  {
    name: "Husbar Digital Marketing Brand",
    description:
          "Husbar is a cutting-edge digital marketing agency dedicated to helping businesses achieve their growth potential through innovative strategies and data-driven solutions.  s a part of this project, I contributed to enhancing their online presence by developing a fully responsive website with seamless navigation and user-friendly features.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP Animations",
        color: "green-text-gradient",
      },
    ],
    image: husbar,
    demoLink: "https://www.husbar.com/husbar-tech",
    sourceCodeLink: "https://github.com/abdulmoiz01001/husbar/tree/master",
  },
  {
    name: "Abdul Moiz Chat App",
    description:
          "Full Stack MERN Stack based Application of Divine Knots Start up NIC Hyderabad. Promoting the Event Management Service with the implimentation of AI Equilizer of Budget management.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: chat,
    demoLink: "",
    sourceCodeLink: "https://github.com/abdulmoiz01001/abdulmoiz-chat-app",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
