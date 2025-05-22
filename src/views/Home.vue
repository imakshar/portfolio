<template>
  <div class="min-h-[calc(100vh-6rem)] flex flex-col">
    <!-- Hero and Summary Section -->
    <div class="py-12">
      <div class="space-y-6">
        <MotionFadeIn :delay="0.2">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-col">
            <span class="gradient-text mb-2">Hi, I'm Akshar</span>
            <span class="text-3xl md:text-4xl lg:text-5xl text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">Senior Software Engineer</span>
          </h1>
          
          <div class="relative bg-white/95 dark:bg-gray-800/95 rounded-lg p-6 shadow-lg group overflow-hidden mt-8">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-light via-purple-500 to-pink-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div class="absolute inset-0 border border-gradient-to-r from-primary-light via-purple-500 to-pink-500 opacity-30 group-hover:opacity-50 rounded-lg"></div>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 relative">
              A passionate software engineer with a love for creating elegant solutions to complex problems. 
              Specializing in modern web technologies and architectures, I bring 5+ years of hands-on experience in:
            </p>
            <ul class="mt-4 space-y-3 relative">
              <li class="flex items-start gap-3 text-gray-700 dark:text-gray-200 group/item">
                <Icon icon="mdi:check-circle" class="w-5 h-5 mt-1 text-primary-light dark:text-primary-dark group-hover/item:scale-110 transition-transform" />
                <span>Frontend Development with React and Vue.js, building scalable and performant web applications</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700 dark:text-gray-200 group/item">
                <Icon icon="mdi:check-circle" class="w-5 h-5 mt-1 text-primary-light dark:text-primary-dark group-hover/item:scale-110 transition-transform" />
                <span>Micro Frontend Architecture & Module Federation, creating modular and maintainable applications</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700 dark:text-gray-200 group/item">
                <Icon icon="mdi:check-circle" class="w-5 h-5 mt-1 text-primary-light dark:text-primary-dark group-hover/item:scale-110 transition-transform" />
                <span>Technical Leadership & Mentorship, guiding teams to deliver high-quality solutions</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700 dark:text-gray-200 group/item">
                <Icon icon="mdi:check-circle" class="w-5 h-5 mt-1 text-primary-light dark:text-primary-dark group-hover/item:scale-110 transition-transform" />
                <span>Full Stack Development with Node.js, Express, and various modern frameworks</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-wrap items-center gap-3 md:gap-4 mt-8">
            <a 
              href="https://github.com/imakshar"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-primary-light text-white hover:bg-primary-dark transition-colors group text-sm md:text-base"
            >
              <Icon icon="mdi:github" class="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/akshar-sarvaiya"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors group text-sm md:text-base"
            >
              <Icon icon="mdi:linkedin" class="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
              LinkedIn
            </a>
            <a 
              href="mailto:aksharsarvaiya123@gmail.com"
              class="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors group text-sm md:text-base"
            >
              <Icon icon="mdi:gmail" class="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
              Gmail
            </a>
            <a 
              href="https://stackoverflow.com/users/12208858"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors group text-sm md:text-base"
            >
              <Icon icon="mdi:stack-overflow" class="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
              Stack Overflow
            </a>
          </div>
          
          <div class="mt-8">
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Tech Stack</p>
            <div class="flex flex-wrap gap-4">
              <img 
                v-for="tech in techStack"
                :key="tech.name"
                :src="tech.icon"
                :alt="tech.name"
                :title="tech.name"
                class="w-8 h-8 object-contain transition-transform hover:scale-110"
                :class="{'dark:invert': tech.invertInDark}"
              />
            </div>
          </div>
        </MotionFadeIn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { MotionFadeIn } from '../components/motion/MotionFadeIn'

interface TechStack {
  name: string
  icon: string
  invertInDark?: boolean
}

const techStack: TechStack[] = [
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
</script>