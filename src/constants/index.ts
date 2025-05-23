// Contact Information
export { contactInfo } from './contact'

// Summary Section
export { summaryContent, techStack } from './summary'

// Section Constants
export { skills } from './sections/skills'
export { experiences } from './sections/experience'
export { projects } from './sections/projects'
export { openSourceContributions } from './sections/opensource'

// Configuration Constants
export const sectionIds = {
  summary: 'summary',
  skills: 'skills',
  experience: 'experience',
  projects: 'projects',
  opensource: 'opensource'
} as const

export const sectionTitles = {
  summary: "Hi, I'm Akshar",
  skills: 'Skills & Technologies',
  experience: 'Work Experience',
  projects: 'Projects & Contributions',
  opensource: 'Open Source Contributions'
} as const