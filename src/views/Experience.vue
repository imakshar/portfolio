<template>
  <div class="space-y-16">
    <MotionFadeIn>
      <h1 class="text-4xl md:text-5xl font-bold mb-16 gradient-text">Work Experience</h1>
    </MotionFadeIn>

    <div class="space-y-12">
      <MotionFadeIn v-for="(experience, index) in experiences" :key="experience.company" :delay="index * 0.2">
        <div class="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-gradient-to-b from-primary-light to-purple-500">
          <div class="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-primary-light -translate-x-1 ring-4 ring-primary-light/20"></div>
          <div class="relative bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm group hover:shadow-xl hover:shadow-primary-light/10 transition-all duration-300">
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary-light via-purple-500 to-pink-500 opacity-50"></div>
            <div class="relative bg-white/95 dark:bg-gray-800/95 rounded-lg p-8">
              <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{{ experience.company }}</h2>
              <div class="flex flex-wrap items-center gap-3 mb-6">
                <h3 class="text-xl text-gray-800 dark:text-gray-200">{{ experience.role }}</h3>
                <span class="px-4 py-1.5 text-sm rounded-full bg-primary-light/10 dark:bg-primary-light/20 text-primary-dark dark:text-primary-light font-medium">
                  {{ experience.period }}
                </span>
              </div>
              <ul class="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 mb-8">
                <li v-for="responsibility in experience.responsibilities" :key="responsibility" class="leading-relaxed pl-2">
                  {{ responsibility }}
                </li>
              </ul>
              <div class="flex flex-wrap gap-3">
                <span v-for="tech in experience.technologies" :key="tech" class="px-4 py-2 text-sm rounded-full bg-primary-light/10 dark:bg-primary-light/20 text-primary-dark dark:text-primary-light font-medium">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </MotionFadeIn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MotionFadeIn } from '../components/motion/MotionFadeIn'

interface Experience {
  company: string
  role: string
  period: string
  responsibilities: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    company: 'Cybage Software',
    role: 'Senior Software Engineer',
    period: 'Nov 2022 - Present',
    technologies: ['React', 'Redux', 'Material UI', 'Vue.js', 'Vite', 'Micro Frontend'],
    responsibilities: [
      'Led a team of 7 developers in designing and developing a new project from scratch for the CMS user management portal using React, Redux, Material UI, Vite, and micro frontend (module federation).',
      'Developed and implemented new features for a network domain project using Vue.js, Vite, and micro frontend.',
      'Mentored junior developers and ensured the team followed best practices for React and Vue development.',
      'Successfully migrated an Angular app to React, resulting in a more efficient and user-friendly CMS.',
      'Made key decisions on the tech stack for the CMS user management project in collaboration with the client.',
      'Managed tasks and coordinated with QA to ensure timely and high-quality releases.'
    ]
  },
  {
    company: 'Accenture',
    role: 'Application Development Analyst',
    period: 'Jun 2022 - Oct 2022',
    technologies: ['Angular', 'RxJS', 'Redux', 'TypeScript', 'Node.js'],
    responsibilities: [
      'Development and enhancement of web-based utility domain application portals for Scottish Power\'s customers.',
      'Actively engaged in direct client communication, managing and collaborating with a team of 5 members.',
      'Developed RxJs and Redux observables to handle async operations.'
    ]
  },
  {
    company: 'Accenture',
    role: 'Associate Software Engineer',
    period: 'Dec 2020 - May 2022',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Express'],
    responsibilities: [
      'Integrated strict typescript to ensure type safety in all modules.',
      'Proactively identified and resolved critical bugs in the application.',
      'Worked on complex Payment modules, Pre-payment, and installment handling on smart meters.',
      'Provided dynamic solutions and developed reusable components.'
    ]
  },
  {
    company: 'Achintya',
    role: 'Software Engineer',
    period: 'Aug 2020 - Nov 2020',
    technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io'],
    responsibilities: [
      'Worked as a Full-Stack developer to build a video streaming and chatting app.',
      'Developed and enhanced the Lawmax web app for peer-to-peer client and lawyer interaction.'
    ]
  },
  {
    company: 'Script All DNA Technologies',
    role: 'Software Engineer',
    period: 'Feb 2020 - Aug 2020',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    responsibilities: [
      'Worked as a Full-Stack developer to build a Learning Management web app Ekaxa.',
      'Developed dedicated portals for students, teachers, and parents.',
      'Developed cross-platform file-sharing software with context menu integration.'
    ]
  }
]
</script>