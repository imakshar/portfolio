<template>
  <div class="space-y-8">
    <MotionFadeIn>
      <h1 class="text-4xl md:text-5xl font-bold mb-8 gradient-text">{{ sectionTitles.projects }}</h1>
    </MotionFadeIn>

    <div class="space-y-8">
      <MotionFadeIn v-for="(project, index) in projects" :key="project.title" :delay="index * 0.2">
        <BaseCard :showTimeline="true">
          <template #title>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ project.title }}</h2>
          </template>

          <template #actions>
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
          </template>

          <template #content>
            <p class="text-gray-700 dark:text-gray-300 mb-8">{{ project.description }}</p>
          </template>

          <template #footer>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="tech in project.technologies" 
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
import { projects, sectionTitles } from '../constants'
</script>