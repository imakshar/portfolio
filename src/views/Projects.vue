<template>
  <div class="space-y-16">
    <MotionFadeIn>
      <h1 class="text-4xl md:text-5xl font-bold mb-16 gradient-text">Projects & Contributions</h1>
    </MotionFadeIn>

    <div class="space-y-12">
      <MotionFadeIn v-for="(project, index) in projects" :key="project.title" :delay="index * 0.2">
        <div class="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-gradient-to-b from-primary-light to-purple-500">
          <div class="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-primary-light -translate-x-1 ring-4 ring-primary-light/20"></div>
          <div class="relative bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm group hover:shadow-xl hover:shadow-primary-light/10 transition-all duration-300">
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary-light via-purple-500 to-pink-500 opacity-50"></div>
            <div class="relative bg-white/95 dark:bg-gray-800/95 rounded-lg p-8">
              <div class="flex items-start justify-between mb-4">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ project.title }}</h2>
                <div class="flex gap-2 ml-4">
                  <a 
                    v-for="(link, key) in project.links" 
                    :key="key"
                    :href="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
                           dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
                  >
                    <Icon 
                      :icon="key === 'github' ? 'mdi:github' : 'mdi:web'" 
                      class="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </a>
                </div>
              </div>
              <p class="text-gray-700 dark:text-gray-300 mb-8">{{ project.description }}</p>
              <div class="flex flex-wrap gap-3">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-4 py-2 text-sm rounded-full bg-primary-light/10 dark:bg-primary-light/20 text-primary-dark dark:text-primary-light font-medium"
                >
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
import { Icon } from '@iconify/vue'
import { MotionFadeIn } from '../components/motion/MotionFadeIn'

interface Project {
  title: string
  description: string
  technologies: string[]
  links: {
    github?: string
    live?: string
  }
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Vue 3, TypeScript, and Tailwind CSS.',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'CSS Animations'],
    links: {
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com'
    }
  },
  {
    title: 'CMS User Management Portal',
    description: 'Led the development of a comprehensive CMS user management portal using micro frontend architecture with module federation. Implemented modern UI patterns and optimized performance.',
    technologies: ['React', 'Redux', 'Material UI', 'Vite', 'Micro Frontend', 'TypeScript'],
    links: {
      demo: 'https://demo-cms.example.com'
    }
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
</script>

<style scoped>
.project-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: var(--delay);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>