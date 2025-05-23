<template>
  <div class="space-y-8">
    <MotionFadeIn>
      <h2 class="text-4xl md:text-5xl font-bold mb-8 gradient-text">{{ sectionTitles.opensource }}</h2>
    </MotionFadeIn>

    <div class="space-y-8">
      <MotionFadeIn v-for="(contribution, index) in openSourceContributions" :key="index" :delay="index * 0.2">
        <BaseCard :showTimeline="true">
          <template #title>
            <h3 class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ contribution.project }}</h3>
          </template>

          <template #actions>
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
          </template>

          <template #content>
            <p class="text-gray-700 dark:text-gray-300 mb-4">{{ contribution.description }}</p>
            <p v-if="contribution.impact" class="text-primary-dark dark:text-primary-light mb-8 italic">
              Impact: {{ contribution.impact }}
            </p>
          </template>

          <template #footer>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="tech in contribution.technologies" 
                :key="tech"
                class="px-4 py-2 text-sm rounded-full bg-primary-light/10 dark:bg-primary-light/20 text-primary-dark dark:text-primary-light font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </template>
        </BaseCard>
      </MotionFadeIn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { MotionFadeIn } from './motion/MotionFadeIn'
import BaseCard from './BaseCard.vue'
import { openSourceContributions, sectionTitles } from '../constants'
</script>