<template>
  <header class="header">
    <a href="#" class="logo">Murilo Oliveira</a>
    
    <div class="header-controls">
      <ThemeToggle />
      <div class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuActive }">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>

    <nav class="navbar" :class="{ active: isMenuActive }">
      <div class="nav-links">
        <a href="#home" @click="closeMenu" :class="{ active: activeSection === 'home' }">Home</a>
        <a href="#about" @click="closeMenu" :class="{ active: activeSection === 'about' }">About</a>
        <a href="#projects" @click="closeMenu" :class="{ active: activeSection === 'projects' }">Projects</a>
        <a href="#contacts" @click="closeMenu" :class="{ active: activeSection === 'contacts' }">Contact</a>
      </div>
      
      <div class="nav-social">
        <a href="https://github.com/devMuriloOliveira" target="_blank" class="social-link">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/murilo-oliveira-28ab52248/" target="_blank" class="social-link">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://wa.me/5519971549006" target="_blank" class="social-link">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </nav>

    <div class="menu-overlay" :class="{ active: isMenuActive }" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const isMenuActive = ref(false)
const activeSection = ref('home')

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
  document.body.style.overflow = isMenuActive.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuActive.value = false
  document.body.style.overflow = ''
}

const updateActiveSection = () => {
  const sections = ['home', 'about', 'projects', 'contacts']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: all 0.3s ease;
}

.logo {
  font-size: 2.5rem;
  color: var(--text-color);
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo:hover {
  color: var(--main-color);
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 101;
}

.bar {
  width: 100%;
  height: 3px;
  background: var(--text-color);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.menu-toggle.active .bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.menu-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.navbar {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.nav-links {
  display: flex;
  gap: 4rem;
}

.navbar a {
  font-size: 1.6rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

.navbar a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--main-color);
  transition: width 0.3s ease;
}

.navbar a:hover::after,
.navbar a.active::after {
  width: 100%;
}

.navbar a:hover,
.navbar a.active {
  color: var(--main-color);
}

.nav-social {
  display: none;
}

.menu-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 98;
}

@media (max-width: 768px) {
  .header {
    padding: 1.5rem 5%;
  }

  .logo {
    font-size: 2.2rem;
  }

  .header-controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .menu-toggle {
    display: flex;
  }

  .navbar {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background: var(--bg-color);
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    transition: right 0.3s ease;
    z-index: 99;
  }

  .navbar.active {
    right: 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .navbar a {
    font-size: 2rem;
  }

  .nav-social {
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
  }

  .social-link {
    width: 4.5rem;
    height: 4.5rem;
    background: var(--snd-bf-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    font-size: 2rem;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background: var(--main-color);
    color: var(--bg-color);
    transform: translateY(-3px);
  }

  .menu-overlay {
    display: block;
  }

  .menu-overlay.active {
    opacity: 1;
    visibility: visible;
  }
}
</style> 