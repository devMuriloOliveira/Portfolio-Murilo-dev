<template>
  <section class="projects" id="projects">
    <div class="container">
      <h2 class="heading">Meus <span>Projetos</span></h2>

      <div class="filter-buttons">
        <button 
          v-for="category in categories" 
          :key="category.id"
          :class="['filter-btn', { active: activeCategory === category.id }]"
          @click="filterProjects(category.id)"
        >
          {{ category.name }}
        </button>
      </div>

      <div class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="project-card"
        >
          <div class="project-img">
            <img 
              :src="project.image" 
              :alt="project.title"
              @error="handleImageError"
            >
            <div class="project-overlay">
              <div class="project-links">
                <a :href="project.github" target="_blank" class="project-link">
                  <i class="fab fa-github"></i>
                </a>
                <a :href="project.demo" target="_blank" class="project-link">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider-1"></div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import beautysalon from '@/assets/projects/beautsalon.png'
import doctorCare from '@/assets/projects/doctor-care.png'
import dtMoney from '@/assets/projects/refound.png'
import igniteTimer from '@/assets/projects/Foco-timer.png'
import coffeeDelivery from '@/assets/projects/aluraSpace.png'
import githubBlog from '@/assets/projects/cineTag.png'
import landingPage1 from '@/assets/projects/Organo.png'
import landingPage2 from '@/assets/projects/mochilaDeViagem.png'
import landingPage3 from '@/assets/projects/IMC.png'
import jogoNumeroSecreto from '@/assets/projects/numero-secreto.png'

const handleImageError = (e) => {
  e.target.src = 'https://via.placeholder.com/400x300?text=Projeto'
}

const categories = [
  { id: 'all', name: 'Todos os Projetos' },
//   { id: 'vue', name: 'Projetos em Vue.js' },
  { id: 'react', name: 'Projetos em React' },
  { id: 'html-css', name: 'Projetos em HTML, CSS e JavaScript' }
]

const projects = [
  {
    id: 1,
    title: 'beautysalon',
    description: 'Site de um salão de beleza desenvolvido com HTML, CSS e JavaScript.',
    category: 'html-css',
    github: 'https://github.com/devMuriloOliveira/beautysalon',
    demo: 'https://devmurilooliveira.github.io/beautysalon/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
    image: beautysalon
  },
  {
    id: 2,
    title: 'Doctor Care',
    description: 'Site de um site de um clínica médica desenvolvido com HTML, CSS e JavaScript.',
    category: 'html-css',
    github: 'https://github.com/devMuriloOliveira/doctor-care',
    demo: 'https://devmurilooliveira.github.io/doctor-car/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
    image: doctorCare
  },
  {
    id: 3,
    title: 'Refound',
    description: 'Aplicação de controle financeiro desenvolvida durante o Ignite da Rocketseat. Permite adicionar entradas e saídas, com cálculo automático do saldo.',
    category: 'html-css',
    github: 'https://github.com/devMuriloOliveira/Refund-Template',
    demo: 'https://refund-template-one.vercel.app/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
    image: dtMoney
  },
  {
    id: 4,
    title: 'Foco Timer',
    description: 'Aplicação de pomodoro, desenvolvida com HTML, CSS e JavaScript.',
    category: 'html-css',
    github: 'https://github.com/devMuriloOliveira/foco-timer',
    demo: 'https://foco-timer.vercel.app/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
    image: igniteTimer
  },
  {
    id: 5,
    title: 'Alura-Space',
    description: 'Site de galeria de imagens moderno, desenvolvido com React, com foco em organização visual e navegação intuitiva.',
    category: 'react',
    github: 'https://github.com/devMuriloOliveira/Alura-Space',
    demo: 'https://alura-space-nu-ecru.vercel.app/',
    tags: ['React'],
    image: coffeeDelivery
  },
  {
    id: 6,
    title: 'Cinetag',
    description: 'Site de catálogo de filmes e séries desenvolvido em React, com interface intuitiva e foco em navegação rápida.',
    category: 'react',
    github: 'https://github.com/devMuriloOliveira/cinetag',
    demo: 'https://cinetag-tawny.vercel.app/',
    tags: ['React'],
    image: githubBlog
  },
  {
    id: 7,
    title: 'organo',
    description: 'Site de criação de cards dinâmicos desenvolvido em React, com layout moderno.',
    category: 'react',
    github: 'https://github.com/devMuriloOliveira/organo',
    demo: 'https://organo-gold-ten.vercel.app/',
    tags: ['React'],
    image: landingPage1
  },
  {
    id: 8,
    title: 'Mochila de viagem',
    description: 'Site de checklist de mochila de viagem desenvolvido em HTML/CSS/JS, que armazena dinamicamente os itens no localStorage, preservando suas escolhas mesmo após recarregar a página.',
    category: 'html-css',
    github: 'https://github.com/devMuriloOliveira/Mochila-de-viagem',
    demo: 'https://devmurilooliveira.github.io/Mochila-de-viagem/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
    image: landingPage2
  },
  {
    id: 9,
    title: 'IMC',
    description: 'Calculadora de IMC desenvolvida com HTML, CSS e JavaScript, que permite calcular o índice de massa corporal com base no peso e altura informados pelo usuário.',
    category: 'html-css',
    github: 'https://github.com/devMuriloOliveira/IMC',
    demo: 'https://devmurilooliveira.github.io/IMC/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
    image: landingPage3
  },
  {
    id: 10,
    title: 'Jogo do Número Secreto',
    description: 'Jogo interativo desenvolvido com HTML, CSS e JavaScript, onde o jogador deve adivinhar um número secreto com dicas do sistema.',
    category: 'html-css',
    github: 'https://github.com/devMuriloOliveira/jogo-numero-secreto',
    demo: 'https://jogo-numero-secreto-beige-rho.vercel.app/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
    image: jogoNumeroSecreto
  }
]

const activeCategory = ref('all')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

const filterProjects = (category) => {
  activeCategory.value = category
}
</script>

<style scoped>
.divider-1 {
    height: 1px;
    background: linear-gradient(
      90deg,
      #e6e6e6,
      #0ef
    );
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

.projects {
  padding: 6rem 0;
  background: var(--snd-bf-color-2);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.heading {
  font-size: 4.5rem;
  text-align: center;
  margin-bottom: 5rem;
}

.heading span {
  color: var(--main-color);
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.filter-btn {
  padding: 1rem 2rem;
  font-size: 1.6rem;
  background: transparent;
  border: 2px solid var(--main-color);
  color: var(--text-color);
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--main-color);
  color: var(--bg-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.project-card {
  background: var(--bg-color);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: var(--bg-color);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 2rem;
}

.project-link {
  width: 4rem;
  height: 4rem;
  background: var(--main-color);
  color: var(--bg-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  transition: transform 0.3s ease;
}

.project-link:hover {
  transform: scale(1.1);
}

.project-info {
  padding: 2rem;
}

.project-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.project-info p {
  font-size: 1.4rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tag {
  background: var(--main-color);
  color: var(--bg-color);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .filter-buttons {
    flex-direction: column;
    align-items: center;
  }

  .filter-btn {
    width: 100%;
    max-width: 300px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
