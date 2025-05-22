<template>
  <div class="space-y-16">
    <MotionFadeIn>
      <h1 class="text-4xl md:text-5xl font-bold mb-16 gradient-text">{{ sectionTitles.projects }}</h1>
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
                    v-if="project.links.github"
                    :href="project.links.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
                           dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
                    aria-label="View GitHub Repository"
                  >
                    <Icon icon="mdi:github" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a 
                    v-if="project.links.live"
                    :href="project.links.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
                           dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
                    aria-label="View Live Site"
                  >
                    <Icon icon="mdi:web" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a 
                    v-if="project.links.demo"
                    :href="project.links.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
                           dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
                    aria-label="View Demo"
                  >
                    <Icon icon="mdi:play-circle" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
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
import { projects, sectionTitles } from '../constants'
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