<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>Murilo <span>Oliveira</span></h3>
          <p>Desenvolvedor Frontend apaixonado por criar interfaces modernas e intuitivas.</p>
          <div class="social-links">
            <a href="https://github.com/devMuriloOliveira" target="_blank" class="social-link">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/murilo-oliveira-28ab52248/" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/5519971549006" target="_blank" class="social-link">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:muriloleiteoliveira1@gmail.com" class="social-link">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-section">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contacts">Contato</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Habilidades</h4>
            <ul>
              <li>Vue.js</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Contato</h4>
            <ul>
              <li>
                <i class="fas fa-envelope"></i>
                muriloleiteoliveira1@gmail.com
              </li>
              <li>
                <i class="fab fa-whatsapp"></i>
                +55 (19) 97154-9006
              </li>
              <li>
                <i class="fas fa-map-marker-alt"></i>
                Campinas, SP - Brasil
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Murilo Oliveira. Todos os direitos reservados.</p>
        <p>Desenvolvido com <i class="fas fa-heart"></i> e <i class="fas fa-coffee"></i></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--bg-color);
  padding: 6rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 10;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.footer-brand h3 {
  font-size: 2.4rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.footer-brand h3 span {
  color: var(--main-color);
}

.footer-brand p {
  font-size: 1.4rem;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  width: 4rem;
  height: 4rem;
  background: var(--snd-bf-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  font-size: 1.8rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.social-link:hover {
  background: var(--main-color);
  color: var(--bg-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.footer-section h4 {
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  position: relative;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.8rem;
  width: 3rem;
  height: 2px;
  background: var(--main-color);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 1.2rem;
}

.footer-section ul li a {
  color: var(--text-color);
  opacity: 0.8;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
}

.footer-section ul li a:hover {
  color: var(--main-color);
  opacity: 1;
  padding-left: 0.5rem;
  transform: translateX(5px);
}

.footer-section ul li {
  color: var(--text-color);
  opacity: 0.8;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: default;
}

.footer-section ul li i {
  color: var(--main-color);
  font-size: 1.6rem;
  transition: transform 0.3s ease;
}

.footer-section ul li:hover i {
  transform: scale(1.1);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  font-size: 1.4rem;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 1rem;
}

.footer-bottom i {
  color: var(--main-color);
  margin: 0 0.5rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-section {
    text-align: center;
  }

  .footer-section h4::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-section ul li {
    justify-content: center;
  }
}
</style> 