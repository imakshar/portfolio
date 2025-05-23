<template>
  <div class="relative pl-8" :class="{ 'before:content-[\'\'] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-gradient-to-b from-primary-light to-purple-500': showTimeline }">
    <div v-if="showTimeline" class="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-primary-light -translate-x-1 ring-4 ring-primary-light/20"></div>
    <div class="relative bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm group hover:shadow-xl hover:shadow-primary-light/10 transition-all duration-300">
      <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary-light via-purple-500 to-pink-500 opacity-50"></div>
      <div class="relative bg-white/95 dark:bg-gray-800/95 rounded-lg p-8">
        <!-- Header -->
        <div class="flex items-start justify-between mb-4">
          <slot name="title"></slot>
          <div v-if="$slots.actions" class="flex gap-2 ml-4">
            <slot name="actions"></slot>
          </div>
        </div>

        <!-- Content -->
        <slot name="content"></slot>

        <!-- Footer -->
        <div v-if="$slots.footer" class="mt-8">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  showTimeline: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: all 0.3s ease;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>