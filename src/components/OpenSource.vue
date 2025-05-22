<template>
  <div class="space-y-16">
    <MotionFadeIn>
      <h2 class="text-4xl md:text-5xl font-bold mb-16 gradient-text">Open Source Contributions</h2>
    </MotionFadeIn>

    <div class="space-y-12">
      <MotionFadeIn v-for="(contribution, index) in contributions" :key="index" :delay="index * 0.2">
        <div class="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-gradient-to-b from-primary-light to-purple-500">
          <div class="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-primary-light -translate-x-1 ring-4 ring-primary-light/20"></div>
          <div class="relative bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm group hover:shadow-xl hover:shadow-primary-light/10 transition-all duration-300">
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary-light via-purple-500 to-pink-500 opacity-50"></div>
            <div class="relative bg-white/95 dark:bg-gray-800/95 rounded-lg p-8">
              <div class="flex items-start justify-between mb-4">
                <h3 class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ contribution.project }}</h3>
                <div class="flex gap-2 ml-4">
                  <a 
                    :href="contribution.githubLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
                           dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
                  >
                    <Icon icon="mdi:github" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a 
                    :href="contribution.prLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
                           dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
                  >
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                      alt="React logo" 
                      class="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
              <p class="text-gray-700 dark:text-gray-300 mb-8">{{ contribution.description }}</p>
              <div class="flex flex-wrap gap-3">
                <span 
                  v-for="tech in contribution.technologies" 
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
import { MotionFadeIn } from './motion/MotionFadeIn'

interface Contribution {
  project: string
  description: string
  prLink: string
  githubLink: string
  technologies: string[]
}

const contributions: Contribution[] = [
  {
    project: 'React Native Elements',
    description: 'Fixed critical bug affecting component rendering and performance.',
    prLink: 'https://github.com/react-native-elements/react-native-elements/pull/1234',
    githubLink: 'https://github.com/react-native-elements/react-native-elements',
    technologies: ['React Native', 'TypeScript', 'Jest']
  },
  {
    project: 'React Native Elements',
    description: 'Enhanced component accessibility and improved documentation.',
    prLink: 'https://github.com/react-native-elements/react-native-elements/pull/5678',
    githubLink: 'https://github.com/react-native-elements/react-native-elements',
    technologies: ['React Native', 'Documentation', 'Accessibility']
  }
]
</script>

<style scoped>
.contribution-card {
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