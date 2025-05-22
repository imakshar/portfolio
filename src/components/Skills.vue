<template>
  <section class="py-2">
    <MotionFadeIn>
      <h2 class="text-4xl md:text-5xl font-bold mb-16 gradient-text">Skills & Technologies</h2>
    </MotionFadeIn>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <MotionFadeIn v-for="(skill, index) in skills" :key="skill.name" :delay="index * 0.1">
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
            </div>
          </div>
        </div>
      </MotionFadeIn>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MotionFadeIn } from './motion/MotionFadeIn'

interface Skill {
  name: string
  icon: string
  proficiency: number
  invertInDark?: boolean
}

const hoveredSkill = ref<string | null>(null)

const skills = ref<Skill[]>([
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    proficiency: 95
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    proficiency: 90
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    proficiency: 90
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    proficiency: 85
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    proficiency: 85,
    invertInDark: true
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    proficiency: 85
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    proficiency: 80,
    invertInDark: true
  },
  {
    name: 'NestJS',
    icon: 'https://nestjs.com/img/logo-small.svg',
    proficiency: 75
  },
  {
    name: 'GraphQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    proficiency: 80
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    proficiency: 80
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    proficiency: 75
  },
  {
    name: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    proficiency: 85
  },
  {
    name: 'MaterialUI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    proficiency: 90
  },
  {
    name: 'Ant Design',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    proficiency: 85
  },
  {
    name: 'Tailwind',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    proficiency: 90
  },
  {
    name: 'RxJS',
    icon: 'https://rxjs.dev/assets/images/favicons/favicon-192x192.png',
    proficiency: 85
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    proficiency: 80
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    proficiency: 90
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    proficiency: 75
  },
  {
    name: 'Socket.io',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    proficiency: 75
  },
  {
    name: 'Cypress',
    icon: 'https://avatars.githubusercontent.com/u/8908513?s=200&v=4',
    proficiency: 85
  },
  {
    name: 'Testing Library',
    icon: 'https://testing-library.com/img/octopus-128x128.png',
    proficiency: 85
  },
  {
    name: 'Apollo',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    proficiency: 80
  },
  {
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    proficiency: 70
  }
])

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