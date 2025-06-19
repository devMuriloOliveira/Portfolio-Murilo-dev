<template>
  <main>
    <HeroSection />
    <AboutSection />
    <MyProjects />
  </main>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import MyProjects from '@/components/MyProjects.vue'
</script>

<style scoped>
main {
  min-height: 100vh;
  background: var(--bg-color);
}
</style> 