<template>
  <section class="py-12">
    <MotionFadeIn>
      <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Education</h2>
    </MotionFadeIn>

    <div class="space-y-8">
      <MotionFadeIn v-for="(edu, index) in education" :key="edu.degree" :delay="index * 0.2">
        <div 
          class="education-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300"
          :class="{ 'hover-active': hoveredDegree === edu.degree }"
          :data-edu="edu.degree"
          @mouseenter="onHover(edu.degree)"
          @mouseleave="onHoverEnd"
        >
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{{ edu.degree }}</h3>
          <p class="text-primary-light dark:text-primary-dark font-medium mb-2">{{ edu.school }}</p>
          <p class="text-gray-600 dark:text-gray-400">{{ edu.period }}</p>
        </div>
      </MotionFadeIn>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MotionFadeIn } from './motion/MotionFadeIn'

interface Education {
  degree: string
  school: string
  period: string
}

const hoveredDegree = ref<string | null>(null)

const education: Education[] = [
  {
    degree: 'Bachelor of Engineering in Information Technology',
    school: 'LD College of Engineering, Ahmedabad',
    period: 'Aug 2017 - Sep 2020'
  },
  {
    degree: 'Diploma Engineering in Information Technology',
    school: 'Government Polytechnic Ahmedabad',
    period: 'Aug 2014 - Jun 2017'
  }
]

const onHover = (degree: string) => {
  hoveredDegree.value = degree
}

const onHoverEnd = () => {
  hoveredDegree.value = null
}
</script>

<style scoped>
.education-card {
  transform: translateY(0);
}

.education-card.hover-active {
  transform: translateY(-5px) scale(1.02);
}
</style>