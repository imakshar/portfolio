import { Project } from '../../types/portfolio'

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Vue 3, TypeScript, and Tailwind CSS.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'CSS Animations'],
    links: {
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com'
    },
    featured: true
  },
  {
    title: 'CMS User Management Portal',
    description: 'Led the development of a comprehensive CMS user management portal using micro frontend architecture with module federation. Implemented modern UI patterns and optimized performance.',
    technologies: ['React', 'Redux', 'Material UI', 'Vite', 'Micro Frontend', 'TypeScript'],
    links: {
      demo: 'https://demo-cms.example.com'
    },
    featured: true
  },
  {
    title: 'Network Domain Project',
    description: 'Developed and implemented new features for a network domain project using Vue.js and micro frontend architecture, focusing on performance and scalability.',
    technologies: ['Vue.js', 'Vite', 'Micro Frontend', 'TypeScript'],
    links: {
      github: 'https://github.com/imakshar/network-domain'
    }
  },
  {
    title: 'Lawmax Web App',
    description: 'Built a full-stack video streaming and chatting application enabling peer-to-peer interaction between clients and lawyers. Implemented WebRTC for real-time communication.',
    technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io'],
    links: {
      github: 'https://github.com/imakshar/lawmax-web'
    }
  },
  {
    title: 'Ekaxa Learning Management System',
    description: 'Developed a comprehensive learning management system with dedicated portals for students, teachers, and parents. Implemented real-time notifications and interactive learning features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    links: {
      demo: 'https://ekaxa-lms.example.com'
    }
  }
]