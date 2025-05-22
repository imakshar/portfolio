<template>
  <div class="min-h-[calc(100vh-6rem)] flex flex-col">
    <!-- Hero and Summary Section -->
    <div class="py-12">
      <div class="space-y-6">
        <MotionFadeIn :delay="0.2">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-col">
            <span class="gradient-text mb-2">{{ homeContent.title }}</span>
            <span class="text-3xl md:text-4xl lg:text-5xl text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{{ homeContent.subtitle }}</span>
          </h1>
          
          <div class="relative bg-white/95 dark:bg-gray-800/95 rounded-lg p-6 shadow-lg group overflow-hidden mt-8">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-light via-purple-500 to-pink-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div class="absolute inset-0 border border-gradient-to-r from-primary-light via-purple-500 to-pink-500 opacity-30 group-hover:opacity-50 rounded-lg"></div>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 relative">
              {{ homeContent.summary }}
            </p>
            <ul class="mt-4 space-y-3 relative">
              <li 
                v-for="point in homeContent.bulletPoints" 
                :key="point.text" 
                class="flex items-start gap-3 text-gray-700 dark:text-gray-200 group/item"
              >
                <Icon :icon="point.icon" class="w-5 h-5 mt-1 text-primary-light dark:text-primary-dark group-hover:item:scale-110 transition-transform" />
                <span>{{ point.text }}</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-wrap items-center gap-3 md:gap-4 mt-8">
            <a 
              v-for="social in contactInfo.socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="getSocialButtonClass(social.name)"
              :aria-label="social.label"
            >
              <Icon :icon="social.icon" class="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
              {{ social.name }}
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
import { homeContent, techStack, contactInfo } from '../constants'

// Helper function to get social button classes
const getSocialButtonClass = (name: string) => {
  const baseClasses = 'inline-flex items-center gap-2 px-4 py-3 rounded-lg text-white hover:bg-opacity-90 transition-colors group text-sm md:text-base'
  const colorClasses = {
    'GitHub': 'bg-primary-light hover:bg-primary-dark',
    'LinkedIn': 'bg-blue-500 hover:bg-blue-600',
    'Email': 'bg-red-500 hover:bg-red-600',
    'Stack Overflow': 'bg-orange-500 hover:bg-orange-600'
  }
  return `${baseClasses} ${colorClasses[name as keyof typeof colorClasses]}`
}
</script>