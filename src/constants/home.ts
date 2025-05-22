import { HomeSection, TechStackItem } from '../types/portfolio'

export const homeContent: HomeSection = {
  name: 'Akshar Sarvaiya',
  title: "Hi, I'm Akshar",
  subtitle: 'Senior Software Engineer',
  summary: 'A passionate software engineer with a love for creating elegant solutions to complex problems. Specializing in modern web technologies and architectures, I bring 5+ years of hands-on experience in:',
  bulletPoints: [
    {
      text: 'Frontend Development with React and Vue.js, building scalable and performant web applications',
      icon: 'mdi:check-circle'
    },
    {
      text: 'Micro Frontend Architecture & Module Federation, creating modular and maintainable applications',
      icon: 'mdi:check-circle'
    },
    {
      text: 'Technical Leadership & Mentorship, guiding teams to deliver high-quality solutions',
      icon: 'mdi:check-circle'
    },
    {
      text: 'Full Stack Development with Node.js, Express, and various modern frameworks',
      icon: 'mdi:check-circle'
    }
  ]
}

export const techStack: TechStackItem[] = [
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    invertInDark: true
  }
]