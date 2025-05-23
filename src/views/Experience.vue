<template>
  <div class="space-y-8">
    <MotionFadeIn>
      <h1 class="text-4xl md:text-5xl font-bold mb-8 gradient-text">{{ sectionTitles.experience }}</h1>
    </MotionFadeIn>

    <div class="space-y-8">
      <MotionFadeIn v-for="(experience, index) in experiences" :key="experience.company" :delay="index * 0.2">
        <BaseCard :showTimeline="true">
          <template #title>
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
          </template>

          <template #actions>
            <span class="px-4 py-1.5 text-sm rounded-full bg-primary-light/10 dark:bg-primary-light/20 text-primary-dark dark:text-primary-light font-medium">
              {{ experience.period }}
            </span>
          </template>

          <template #content>
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
          </template>

          <template #footer>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="tech in experience.technologies" 
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
import { MotionFadeIn } from '../components/motion/MotionFadeIn'
import BaseCard from '../components/BaseCard.vue'
import { experiences, sectionTitles } from '../constants'
</script>