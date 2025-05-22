import { ref, onMounted, onUnmounted } from 'vue'

export const useIntersectionObserver = (options = {}) => {
  const isVisible = ref(false)
  const targetRef = ref<HTMLElement | null>(null)

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        
        // Once visible, disconnect the observer
        if (observer) {
          observer.disconnect()
        }
      }
    })
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  })

  onMounted(() => {
    if (targetRef.value) {
      observer.observe(targetRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    isVisible,
    targetRef
  }
}