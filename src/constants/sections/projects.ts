import { Project } from "../../types/portfolio";

export const projects: Project[] = [
  {
    title: "Short Link",
    description:
      "URL shortening service and link management platform built with modern web technologies.",
    technologies: [
      "React",
      "Material-UI",
      "Recharts",
      "GraphQL",
      "Apollo-Client",
      "Apollo-Server",
      "Node-Express",
      "MongoDB",
      "Mongoose",
    ],
    links: {
      github: "https://github.com/imakshar/Short-Link",
      demo: "https://www.linkedin.com/posts/iamakshar_learner-sideproject-javascript-activity-6685906878247006208-t6mV",
    },
    featured: true,
  },
  {
    title: "Covid-19 Tracker",
    description:
      "Developed using public APIs to provide latest articles, helpline numbers and COVID-19 statistics visualized on world and India maps.",
    technologies: ["React", "Material-UI", "Axios", "Maps Integration"],
    links: {
      github: "https://github.com/imakshar/Covid-19-Tracker",
      demo: "https://www.linkedin.com/posts/iamakshar_covid-sideproject-reactjs-activity-6677475393240489984-IEWz",
    },
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with Vue 3, TypeScript, and Tailwind CSS.",
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "CSS Animations"],
    links: {
      github: "https://github.com/imakshar/portfolio",
      live: "https://yourportfolio.com",
    },
    featured: true,
  },
  {
    title: "Realtime Chat using GraphQL Subscription",
    description:
      "Real-time chat application implementing GraphQL subscriptions with web socket connection for live updates.",
    technologies: [
      "React",
      "Redux",
      "Material-UI",
      "GraphQL",
      "Apollo-Client",
      "Apollo-Server",
      "WebSocket",
    ],
    links: {},
    featured: true,
  },
];
