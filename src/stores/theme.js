import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDarkTheme = ref(localStorage.getItem('theme') === 'dark')

  const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value
    localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light')
    document.body.classList.toggle('light-theme', !isDarkTheme.value)
  }

  // Initialize theme on store creation
  watch(isDarkTheme, (newValue) => {
    document.body.classList.toggle('light-theme', !newValue)
  }, { immediate: true })

  return {
    isDarkTheme,
    toggleTheme
  }
}) 