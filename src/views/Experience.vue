<template>
  <div class="space-y-16">
    <MotionFadeIn>
      <h1 class="text-4xl md:text-5xl font-bold mb-16 gradient-text">{{ sectionTitles.experience }}</h1>
    </MotionFadeIn>

    <div class="space-y-12">
      <MotionFadeIn v-for="(experience, index) in experiences" :key="experience.company" :delay="index * 0.2">
        <div class="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-gradient-to-b from-primary-light to-purple-500">
          <div class="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-primary-light -translate-x-1 ring-4 ring-primary-light/20"></div>
          <div class="relative bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm group hover:shadow-xl hover:shadow-primary-light/10 transition-all duration-300">
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary-light via-purple-500 to-pink-500 opacity-50"></div>
            <div class="relative bg-white/95 dark:bg-gray-800/95 rounded-lg p-8">
              <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  <a 
                    v-if="experience.companyUrl"
                    :href="experience.companyUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    {{ experience.company }}
                  </a>
                  <span v-else>{{ experience.company }}</span>
                </h2>
                <span class="px-4 py-1.5 text-sm rounded-full bg-primary-light/10 dark:bg-primary-light/20 text-primary-dark dark:text-primary-light font-medium">
                  {{ experience.period }}
                </span>
              </div>
              <div class="flex flex-wrap items-center gap-3 mb-6">
                <h3 class="text-xl text-gray-800 dark:text-gray-200">{{ experience.role }}</h3>
                <span v-if="experience.location" class="text-sm text-gray-600 dark:text-gray-400">
                  <Icon icon="mdi:map-marker" class="inline-block w-4 h-4 mr-1" />
                  {{ experience.location }}
                </span>
              </div>
              <ul class="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 mb-8">
                <li v-for="responsibility in experience.responsibilities" :key="responsibility" class="leading-relaxed pl-2">
                  {{ responsibility }}
                </li>
              </ul>
              <div class="flex flex-wrap gap-3">
                <span 
                  v-for="tech in experience.technologies" 
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
import { experiences, sectionTitles } from '../constants'
</script>