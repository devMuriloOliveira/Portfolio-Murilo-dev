<template>
  <section class="about" id="about">
    <div class="divider-1"></div>
    <div class="container">
      <h2 class="heading">Sobre <span>Mim</span></h2>
      
      <div class="about-content">
        <div class="about-img">
          <img src="@/assets/murilo-sobre-mim.png" alt="Murilo Oliveira">
          <div class="experience-badge">
            <span class="years">1+</span>
            <span class="text">Ano de<br>Experiência</span>
          </div>
        </div>

        <div class="about-text">
          <h3>Frontend Developer</h3>
          <p class="description">
            Desenvolvedor Front-End com experiência na criação de interfaces modernas, responsivas e focadas na melhor experiência do usuário. Tenho domínio em Vue.js, React, HTML, CSS e JavaScript, além de familiaridade com Git, GitHub, GitLab e metodologias ágeis.
          </p>

          <p class="description">
            Sou apaixonado por tecnologia e estou no quinto semestre do curso de Análise e Desenvolvimento de Sistemas. Ao longo da minha trajetória, venho me aprimorando em frameworks modernos e aplicando meus conhecimentos em projetos práticos e experiências profissionais.
          </p>

          <p class="description">
            Busco constantemente evoluir como desenvolvedor, entregando soluções criativas, eficientes e com código de qualidade. Estou aberto a novas oportunidades que me desafiem a crescer e contribuir de forma significativa com meu trabalho.
          </p>

          <div class="skills">
            <h4>Minhas Habilidades</h4>
            <div class="skill-tags">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">Nuxt.js</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">HTML5</span>
              <span class="skill-tag">CSS3</span>
              <span class="skill-tag">Tailwind</span>
              <span class="skill-tag">Git</span>
            </div>
          </div>

          <div class="cta-buttons">
            <a href="/Currículo-Murilo-Oliveira-Dev.pdf" class="btn primary" download>
              <i class="fas fa-download"></i> Download CV
            </a>
            <a href="#contacts" class="btn secondary">
              <i class="fas fa-envelope"></i> Contato
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="divider-2"></div>
  </section>
</template>

<style scoped>
.divider-1 {
    height: 1px;
    background: linear-gradient(
      90deg,
      #e6e6e6,
      #0ef
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

.divider-2 {
    height: 1px;
    background: linear-gradient(
      270deg,
      #e6e6e6,
      #0ef
    );
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
.about {
  padding: 6rem 0;
  background: var(--snd-bf-color);
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

.about-content {
  display: flex;
  gap: 5rem;
  align-items: center;
}

.about-img {
  position: relative;
  flex: 1;
}

.about-img img {
  width: 100%;
  border-radius: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.experience-badge {
  position: absolute;
  bottom: -2rem;
  right: -2rem;
  background: var(--main-color);
  color: var(--bg-color);
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.experience-badge .years {
  font-size: 3rem;
  font-weight: bold;
  display: block;
  line-height: 1;
}

.experience-badge .text {
  font-size: 1.2rem;
}

.about-text {
  flex: 1.5;
}

.about-text h3 {
  font-size: 2.6rem;
  margin-bottom: 2rem;
  color: var(--main-color);
}

.description {
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: var(--text-color);
}

.skills {
  margin-bottom: 3rem;
}

.skills h4 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-tag {
  background: var(--main-color);
  color: var(--bg-color);
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  font-size: 1.4rem;
  transition: transform 0.3s ease;
}

.skill-tag:hover {
  transform: translateY(-3px);
}

.cta-buttons {
  display: flex;
  gap: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  border-radius: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn.primary {
  background: var(--main-color);
  color: var(--bg-color);
}

.btn.secondary {
  background: transparent;
  border: 2px solid var(--main-color);
  color: var(--main-color);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .about-img {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .experience-badge {
    right: 0;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style> 