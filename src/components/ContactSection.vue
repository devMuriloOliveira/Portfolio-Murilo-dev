<template>
  <section id="contacts" class="contacts">
    <div class="divider-1"></div>
    <div class="container">
      <h2 class="heading">Entre em <span>Contato</span></h2>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-card">
            <i class="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>muriloleiteoliveira1@gmail.com</p>
          </div>
          
          <div class="contact-card">
            <i class="fab fa-whatsapp"></i>
            <h3>WhatsApp</h3>
            <p>+55 (19) 97154-9006</p>
          </div>
          
          <div class="contact-card">
            <i class="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <p>Murilo Oliveira</p>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="sendMessage">
          <div class="form-header">
            <h3>Envie uma mensagem</h3>
            <p>Estou sempre aberto a novas oportunidades e parcerias</p>
          </div>

          <div class="group-form">
            <div class="input-group">
              <i class="fas fa-user"></i>
              <input 
                type="text" 
                v-model="name" 
                class="form-field" 
                placeholder="Seu nome"
                required
              >
            </div>
          </div>

          <div class="group-form">
            <div class="input-group">
              <i class="fas fa-comment"></i>
              <textarea 
                class="form-field" 
                v-model="message" 
                placeholder="Digite sua mensagem"
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" class="btn-form">
            <i class="fab fa-whatsapp"></i>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const message = ref('')

const sendMessage = () => {
  const phone = '5519971549006'
  const text = `Olá me chamo ${name.value}, ${message.value}`
  const msgFormat = encodeURIComponent(text)
  const url = `https://wa.me/${phone}?text=${msgFormat}`
  
  window.open(url, '_blank')
}
</script>

<style scoped>
.divider-1 {
    height: 1px;
    background: linear-gradient(
      270deg,
      #e6e6e6,
      #0ef
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
.contacts {
  padding: 6rem 0;
  background: var(--snd-bf-color);
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  display: grid;
  gap: 2rem;
}

.contact-card {
  background: var(--bg-color);
  padding: 2rem;
  border-radius: 1.6rem;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-card i {
  font-size: 3rem;
  color: var(--main-color);
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.contact-card p {
  font-size: 1.4rem;
  color: var(--text-color);
}

.contact-form {
  background: var(--bg-color);
  padding: 3rem;
  border-radius: 1.6rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-header h3 {
  font-size: 2.4rem;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.form-header p {
  font-size: 1.4rem;
  color: var(--text-color);
  opacity: 0.8;
}

.input-group {
  position: relative;
  margin-bottom: 2rem;
}

.input-group i {
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.8rem;
  color: var(--main-color);
}

.input-group textarea + i {
  top: 2rem;
  transform: none;
}

.form-field {
  width: 100%;
  padding: 1.5rem 1.5rem 1.5rem 4.5rem;
  font-size: 1.6rem;
  color: var(--text-color);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.6rem;
  transition: all 0.3s ease;
}

textarea.form-field {
  min-height: 150px;
  resize: vertical;
}

.form-field:focus {
  border-color: var(--main-color);
  box-shadow: 0 0 1rem var(--main-color);
}

.btn-form {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem;
  background: var(--main-color);
  border-radius: 1.6rem;
  font-size: 1.6rem;
  color: var(--bg-color);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-form i {
  font-size: 2rem;
}

.btn-form:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-info {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .contact-form {
    padding: 2rem;
  }
}
</style> 