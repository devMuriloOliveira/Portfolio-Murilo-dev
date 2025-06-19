<template>
  <button class="theme-toggle" @click="toggleTheme" :title="isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
    <i :class="isDarkTheme ? 'fas fa-sun' : 'fas fa-moon'"></i>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
const isDarkTheme = computed(() => themeStore.isDarkTheme)

const toggleTheme = () => {
  themeStore.toggleTheme()
}
</script>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 2rem;
  color: var(--text-color);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

.theme-toggle i {
  transition: transform 0.3s ease;
}

.theme-toggle:hover i {
  transform: rotate(360deg);
}

@media (max-width: 768px) {
  .theme-toggle {
    position: static;
    font-size: 1.8rem;
    padding: 0.4rem;
  }
}
</style> 