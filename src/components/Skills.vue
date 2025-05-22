<template>
  <section class="py-6">
    <MotionFadeIn>
      <h2 class="text-4xl md:text-5xl font-bold mb-16 gradient-text">{{ sectionTitles.skills }}</h2>
    </MotionFadeIn>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <MotionFadeIn v-for="(skill, index) in skillsByCategory" :key="skill.name" :delay="index * 0.1">
        <div 
          class="skill-card group relative"
          :class="{ 'hover-active': hoveredSkill === skill.name }"
          :style="{ '--delay': `${index * 0.1}s` }"
          @mouseenter="onHover(skill.name)"
          @mouseleave="onHoverEnd"
        >
          <div class="relative bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm group hover:shadow-xl hover:shadow-primary-light/10 transition-all duration-300">
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary-light via-purple-500 to-pink-500 opacity-50"></div>
            <div class="relative bg-white/95 dark:bg-gray-800/95 rounded-lg p-6">
              <div class="flex items-center justify-center mb-4">
                <img 
                  :src="skill.icon" 
                  :alt="skill.name" 
                  class="w-12 h-12 object-contain transition-opacity"
                  :class="{'dark:invert': skill.invertInDark}"
                />
              </div>
              <h3 class="text-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                {{ skill.name }}
              </h3>
              <div class="mt-2">
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-primary-light dark:bg-primary-dark h-2 rounded-full transition-all duration-1000"
                    :style="{ width: `${skill.proficiency}%` }"
                  />
                </div>
              </div>
              <div class="mt-2 text-center">
                <span class="text-xs text-gray-500 dark:text-gray-400">{{ skill.category }}</span>
              </div>
            </div>
          </div>
        </div>
      </MotionFadeIn>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { MotionFadeIn } from './motion/MotionFadeIn'
import { skills, sectionTitles } from '../constants'
import type { Skill } from '../types/portfolio'

const hoveredSkill = ref<string | null>(null)

// Sort skills by category and proficiency
const skillsByCategory = computed(() => {
  return [...skills].sort((a, b) => {
    if (a.category === b.category) {
      return b.proficiency - a.proficiency
    }
    return (a.category || '').localeCompare(b.category || '')
  })
})

const onHover = (skill: string) => {
  hoveredSkill.value = skill
}

const onHoverEnd = () => {
  hoveredSkill.value = null
}
</script>

<style scoped>
.skill-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.6s ease-out forwards;
  animation-delay: var(--delay);
  transition: all 0.3s ease;
}

.skill-card.hover-active {
  transform: scale(1.05);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>