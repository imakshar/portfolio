<template>
  <div :class="{'dark': isDark}" class="min-h-screen bg-background-light dark:bg-background-dark transition-theme">
    <ProgressBar />
    <nav 
      class="fixed top-0 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm z-40 border-b border-gray-200 dark:border-gray-800"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="container mx-auto px-4 py-4 flex flex-wrap md:flex-nowrap justify-between items-center">
        <a 
          href="#summary" 
          class="font-mono text-xl font-bold gradient-text"
          aria-label="Summary"
        >
          Akshar Sarvaiya
        </a>
        <div class="flex items-center gap-4 md:gap-8">
          <nav 
            class="hidden md:flex items-center gap-6"
            aria-label="Desktop navigation"
          >
            <a 
              v-for="item in navigationItems" 
              :key="item.id"
              :href="`#${item.id}`"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors relative group nav-link"
              :aria-label="item.name"
              @click="closeMobileMenu"
            >
              {{ item.name }}
              <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300"></div>
            </a>
          </nav>
          <button 
            @click="toggleTheme" 
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          >
            <span v-if="isDark" class="text-yellow-500">🌞</span>
            <span v-else class="text-gray-700">🌙</span>
          </button>
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <div class="w-6 h-5 relative flex flex-col justify-between">
              <span 
                class="block w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300"
                :class="{'rotate-45 translate-y-2': isMobileMenuOpen}"
                aria-hidden="true"
              ></span>
              <span 
                class="block w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300"
                :class="{'opacity-0': isMobileMenuOpen}"
                aria-hidden="true"
              ></span>
              <span 
                class="block w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300"
                :class="{'-rotate-45 -translate-y-2': isMobileMenuOpen}"
                aria-hidden="true"
              ></span>
            </div>
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div 
        id="mobile-menu"
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-800"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div class="container mx-auto px-4 py-4">
          <a 
            v-for="item in navigationItems" 
            :key="item.id"
            :href="`#${item.id}`"
            class="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
    <main class="container mx-auto px-4">
      <section id="summary" class="pt-16">
        <SummarySection />
      </section>
      <section id="skills" class="pt-4">
        <Skills />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="opensource">
        <OpenSourceSection />
      </section>
    </main>
    <footer class="py-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-end gap-6">
          <div class="text-center md:text-left">
            <h3 class="text-xl font-bold gradient-text mb-2">Let's Connect!</h3>
            <p class="text-gray-600 dark:text-gray-300">Feel free to reach out for collaborations or just a friendly chat</p>
          </div>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="mailto:aksharsarvaiya123@gmail.com" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Icon icon="mdi:email" class="w-5 h-5" />
              aksharsarvaiya123@gmail.com
            </a>
            <a href="tel:+919624472003" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Icon icon="mdi:phone" class="w-5 h-5" />
              +91 96244 72003
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme } from './composables/useTheme'
import ProgressBar from './components/ProgressBar.vue'
import SummarySection from './views/Summary.vue'
import ExperienceSection from './views/Experience.vue'
import ProjectsSection from './views/Projects.vue'
import OpenSourceSection from './components/OpenSource.vue'
import Skills from './components/Skills.vue'
import { Icon } from '@iconify/vue'

const { isDark, toggleTheme, initTheme } = useTheme()
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Summary', id: 'summary' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Open Source', id: 'opensource' }
]

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  initTheme()
  
  // Add smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')?.substring(1)
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const offset = 80 // Account for fixed header
          const targetPosition = targetElement.offsetTop - offset
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    })
  })
})
</script>
