import { ref, onMounted, watch } from 'vue'
import { usePreferredDark, useLocalStorage } from '@vueuse/core'

export const useTheme = () => {
  const prefersDark = usePreferredDark()
  const isDark = useLocalStorage('theme', prefersDark.value)
  const isTransitioning = ref(false)

  const updateTheme = (value: boolean) => {
    isTransitioning.value = true
    isDark.value = value
    
    document.documentElement.classList.toggle('dark', value)
    
    // Reset transition flag after animation completes
    setTimeout(() => {
      isTransitioning.value = false
    }, 300)
  }

  const toggleTheme = () => {
    if (!isTransitioning.value) {
      updateTheme(!isDark.value)
    }
  }

  const initTheme = () => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme !== null) {
      updateTheme(savedTheme === 'true')
    } else {
      updateTheme(prefersDark.value)
    }
  }

  // Watch for system theme changes
  watch(prefersDark, (newValue) => {
    // Only update if user hasn't set a preference
    if (localStorage.getItem('theme') === null) {
      updateTheme(newValue)
    }
  })

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme,
    initTheme,
    isTransitioning
  }
}