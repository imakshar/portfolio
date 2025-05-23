import { Experience } from '../../types/portfolio'

export const experiences: Experience[] = [
  {
    company: 'Cybage Software',
    role: 'Senior Software Engineer',
    period: 'Nov 2022 - Present',
    // location: 'Gandhinagar, India',
    responsibilities: [
      'Led a team of developers and QA in designing and developing a new project from scratch for the CMS user management portal using React, Redux, Material UI, Vite, and micro frontend',
      'Developed and implemented new features for a network domain project using Vue.js, Vite, and micro frontend',
      'Mentored junior developers and ensured the team on best practices for React and Vue development',
      'Successfully migrated an Angular app to React, resulting in a more efficient CMS',
      'Made key decisions on the tech stack for the CMS user management project in collaboration with the client'
    ],
    technologies: ['React', 'Vue.js', 'TypeScript', 'Redux', 'Material UI', 'Vite', 'Micro Frontend', 'Docker', 'AWS', ]
  },
  {
    company: 'Accenture',
    role: 'Application Development Analyst',
    period: 'Dec 2020 - Oct 2022',
    // location: 'Pune, India',
    responsibilities: [
      'Development and enhancement of web-based utility domain applications for Scottish Power',
      'Managed and collaborated with a team to accomplish business requirements',
      'Developed RxJs and Redux observables to handle async operations',
      'Engaged in direct client communication and requirement analysis',
      'Integrated strict typescript to ensure type safety in all modules',
      'Proactively identified and resolved critical bugs in the application',
      'Worked on complex Payment modules, Pre-payment, and installment handling on smart meters',
      'Provided dynamic solutions and developed reusable components'
    ],
    technologies: ['React', 'RxJs', 'Redux Observable', 'TypeScript', 'Redux', 'Payment Integration']
  },
  {
    company: 'Achintya',
    role: 'Software Engineer',
    period: 'Aug 2020 - Nov 2020',
    // location: 'Bangalore, India',
    responsibilities: [
      'Built a video streaming and chatting app as a Full-Stack developer',
      'Developed and enhanced the Lawmax web app for peer-to-peer client and lawyer interaction',
      'Implemented chat and video call functionality'
    ],
    technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'React-Native-Elements', 'Ant Design']
  },
  {
    company: 'Script All DNA Technologies',
    role: 'Software Engineer',
    period: 'Feb 2020 - Aug 2020',
    // location: 'Ahmedabad, India',
    responsibilities: [
      'Developed Learning Management web app Ekaxa with dedicated portals for students, teachers, and parents',
      'Implemented full-stack features and user management, real time notifications, and interactive learning with real time chat',
      `Developed cross-platform file-sharing software that enables remote file
        sharing using the system's context menu (right-click functionality) which
        supports Windows, Linux, and macOS platforms.`
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'GraphQL', 'File System Integration', 'Python', 'PyQt5'],
  },
]