<template>
  <div class="space-y-16">
    <MotionFadeIn>
      <h2 class="text-4xl md:text-5xl font-bold mb-16 gradient-text">{{ sectionTitles.opensource }}</h2>
    </MotionFadeIn>

    <div class="space-y-12">
      <MotionFadeIn v-for="(contribution, index) in openSourceContributions" :key="index" :delay="index * 0.2">
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
                    aria-label="View GitHub Repository"
                  >
                    <Icon icon="mdi:github" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a 
                    :href="contribution.prLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
                           dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
                    aria-label="View Pull Request"
                  >
                    <Icon icon="mdi:source-pull" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>
              </div>
              <p class="text-gray-700 dark:text-gray-300 mb-4">{{ contribution.description }}</p>
              <p v-if="contribution.impact" class="text-primary-dark dark:text-primary-light mb-8 italic">
                Impact: {{ contribution.impact }}
              </p>
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
import { openSourceContributions, sectionTitles } from '../constants'
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