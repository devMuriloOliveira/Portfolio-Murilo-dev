<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import MyProjects from './components/MyProjects.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import { onMounted } from 'vue'

onMounted(() => {
  // Initialize particles.js
  window.particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#0056b3'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#0056b3',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  })
})
</script>

<template>
  <div class="app">
    <div id="particles-js"></div>
    <ThemeToggle />
    <Header />
    <main>
      <HomeSection />
      <AboutSection />
      <MyProjects />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<style>
.app {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

main {
  position: relative;
  z-index: 2;
}

header {
  position: relative;
  z-index: 2;
}
</style>
