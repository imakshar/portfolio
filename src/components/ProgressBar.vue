<template>
  <div
    class="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50"
  >
    <div
      ref="progressBar"
      class="h-full bg-primary-light dark:bg-primary-dark transition-all duration-150"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'

const progress = ref(0)
const progressBar = ref<HTMLElement | null>(null)

const calculateProgress = () => {
  const winScroll = window.scrollY
  const height = document.documentElement.scrollHeight - window.innerHeight
  progress.value = (winScroll / height) * 100
}

const throttledScrollHandler = useThrottleFn(calculateProgress, 16)

onMounted(() => {
  window.addEventListener('scroll', throttledScrollHandler)
})

onUnmounted(() => {
  window.removeEventListener('scroll', throttledScrollHandler)
})
</script>