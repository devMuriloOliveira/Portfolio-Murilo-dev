<template>
  <section class="home" id="home">
    <div class="home-content">
      <h3>Olá, Eu sou</h3>
      <!-- <h1 ref="nameElement"></h1> -->
      <h1>Murilo <span>Oliveira</span></h1>
      <h3>Desenvolvedor <span ref="professionElement" class="multiple-text"></span></h3>
      <p>Sou Murilo Leite de Oliveira, desenvolvedor Front-end, com foco em JavaScript, Vue.js, React, HTML, CSS e Shopify. Sou formado em Análise e Desenvolvimento de Sistemas e possuo experiência prática adquirida por meio de projetos e vivências profissionais. Busco evolução constante, criação de soluções eficientes e contribuir de forma criativa e estratégica para os projetos em que atuo.</p>
      <div class="social-media">
        <a href="https://github.com/devMuriloOliveira" target="_blank" title="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/murilo-oliveira-28ab52248/" target="_blank" title="LinkedIn">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <a href="/Curriculo-Murilo.pdf" download class="btn">
        <i class="fas fa-download"></i> Download CV
      </a>
    </div>

    <div class="home-img">
      <img src="@/assets/murilo-home.jpg" alt="home">
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TypeIt from 'typeit'

const nameElement = ref(null)
const professionElement = ref(null)

onMounted(() => {
  // Efeito de digitação para o nome
  // new TypeIt(nameElement.value, {
  //   strings: ['Murilo Oliveira'],
  //   speed: 180,
  //   waitUntilVisible: true,
  //   loop: true,
  //   loopDelay: 4000,
  //   cursor: {
  //     show: true,
  //     blink: true,
  //     color: 'var(--main-color)',
  //     width: '2px'
  //   }
  // }).go()

  // Efeito de digitação para a profissão
  new TypeIt(professionElement.value, {
    strings: ['Front-end'],
    speed: 150,
    waitUntilVisible: true,
    loop: true,
    loopDelay: 5000,
    cursor: {
      show: true,
      blink: true,
      color: 'var(--main-color)',
      width: '2px'
    }
  }).go()
})
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-content h3 {
  font-size: 3.2rem;
  font-weight: 700;
}

.home-content h3:nth-of-type(2) {
  margin-bottom: 2rem;
}

.home-content h1 {
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
  min-height: 7rem; /* Garante espaço para o cursor */
}

.home-content h1 span {
  color: var(--main-color);
}

.home-content p {
  width: 80%;
}

.multiple-text {
  color: var(--main-color);
  min-height: 4rem;
  display: inline-block;
}

.home-img img {
  width: 25vw;
  height: 25vw;
  object-fit: cover;
  animation: floatImage 4s ease-in-out infinite;
  border-radius: 50%;
}

@keyframes floatImage {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2.4rem);
  }
  100% {
    transform: translateY(0);
  }
}

.home-content p {
  font-size: 1.6rem;
}

.social-media {
  display: flex;
  gap: 2rem;
  margin: 3rem 0;
}

.social-media a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: .2rem solid var(--main-color);
  border-radius: 50%;
  font-size: 2rem;
  color: var(--main-color);
  transition: .5s ease;
}

.social-media a:hover {
  background: var(--main-color);
  color: var(--snd-bf-color);
  box-shadow: 0 0 1rem var(--main-color);
  transform: translateY(-3px);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.8rem;
  background: var(--main-color);
  border-radius: 4rem;
  box-shadow: 0 0 1rem var(--main-color);
  font-size: 1.6rem;
  color: var(--bg-color);
  letter-spacing: .1rem;
  font-weight: 600;
  transition: .5s ease;
}

.btn:hover {
  box-shadow: none;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .home {
    flex-direction: column-reverse;
  }

  .home-content h3 {
    font-size: 2.6rem;
  }

  .home-content h1 {
    font-size: 4.5rem !important;
  }

  .home-content p {
    width: 100%;
  }

  .home-img img {
    width: 70vw;
    height: 70vw;
    margin-top: 4rem;
  }
}
</style> 