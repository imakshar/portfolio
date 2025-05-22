import { defineComponent, h, ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../../composables/useIntersectionObserver'

export const MotionFadeIn = defineComponent({
  props: {
    delay: {
      type: Number,
      default: 0
    }
  },
  setup(props, { slots }) {
    const { isVisible, targetRef } = useIntersectionObserver({
      threshold: 0.1,
      rootMargin: '50px'
    })
    
    const hasAnimated = ref(false)

    onMounted(() => {
      // Force visibility after a delay if intersection observer fails
      setTimeout(() => {
        if (!isVisible.value) {
          isVisible.value = true
        }
      }, 1000)
    })

    return () =>
      h(
        'div',
        {
          ref: targetRef,
          style: {
            opacity: isVisible.value ? 1 : 0,
            transform: isVisible.value ? 'none' : 'translateY(20px)',
            transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${props.delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${props.delay}s`,
            willChange: 'opacity, transform'
          }
        },
        slots.default?.()
      )
  }
})