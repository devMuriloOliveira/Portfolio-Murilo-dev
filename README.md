# 🚀 Portfólio Pessoal - Murilo Oliveira

Um portfólio moderno e responsivo desenvolvido com Vue.js 3, apresentando meus projetos e habilidades como desenvolvedor front-end.

## 📋 Sobre o Projeto

Este é meu portfólio pessoal onde apresento meus projetos, habilidades e experiência como desenvolvedor. O site foi desenvolvido com foco em design moderno, responsividade e performance, utilizando as melhores práticas de desenvolvimento web.

### ✨ Características Principais

- **Design Moderno**: Interface limpa e profissional com animações suaves
- **Totalmente Responsivo**: Adaptável a todos os dispositivos (desktop, tablet, mobile)
- **Tema Escuro/Claro**: Alternância entre temas com persistência de preferência
- **Navegação Suave**: Scroll suave entre seções
- **Filtros de Projetos**: Categorização por tecnologias (React, HTML/CSS/JS)
- **Links Diretos**: Acesso rápido aos repositórios e demos dos projetos
- **Performance Otimizada**: Carregamento rápido e SEO otimizado

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Vue.js 3** - Framework JavaScript progressivo
- **Vite** - Build tool e dev server
- **Vue Router** - Roteamento para SPA
- **Pinia** - Gerenciamento de estado
- **TypeIt** - Biblioteca para efeitos de digitação

### Estilização
- **CSS3** - Estilos customizados com variáveis CSS
- **Flexbox & Grid** - Layouts modernos e responsivos
- **Animações CSS** - Transições e keyframes suaves

### Ferramentas de Desenvolvimento
- **Vite** - Build tool e hot reload
- **Vue DevTools** - Debugging e desenvolvimento

## 📁 Estrutura do Projeto

```
Portfolio/
├── public/                 # Arquivos públicos
│   └── projects/          # Imagens dos projetos
├── src/
│   ├── assets/            # Imagens e recursos estáticos
│   │   └── projects/      # Imagens dos projetos
│   ├── components/        # Componentes Vue
│   │   ├── icons/         # Ícones customizados
│   │   ├── AboutSection.vue
│   │   ├── ContactSection.vue
│   │   ├── Footer.vue
│   │   ├── Header.vue
│   │   ├── HomeSection.vue
│   │   ├── MyProjects.vue
│   │   └── ThemeToggle.vue
│   ├── router/            # Configuração de rotas
│   ├── stores/            # Gerenciamento de estado (Pinia)
│   ├── views/             # Páginas/Views
│   ├── App.vue            # Componente raiz
│   └── main.js            # Ponto de entrada
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/portfolio-vue.git
cd portfolio-vue
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse o projeto**
Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Produção
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
```

## 📱 Seções do Portfólio

### 🏠 Home
- Apresentação pessoal com efeito de digitação
- Links para redes sociais
- Call-to-action para contato

### 👨‍💻 Sobre Mim
- Informações pessoais e profissionais
- Habilidades técnicas
- Experiência e formação

### 💼 Projetos
- Grid responsivo de projetos
- Filtros por categoria (React, HTML/CSS/JS)
- Links para GitHub e demo de cada projeto
- Tags com tecnologias utilizadas

### 📞 Contato
- Formulário de contato
- Links para redes sociais
- Informações de contato direto

## 🎨 Funcionalidades

### Tema Escuro/Claro
- Alternância automática entre temas
- Persistência da preferência do usuário
- Transições suaves entre temas

### Filtros de Projetos
- Categorização por tecnologias
- Interface intuitiva com botões
- Transições suaves entre filtros

### Responsividade
- Design mobile-first
- Breakpoints otimizados
- Navegação adaptativa

### Performance
- Lazy loading de imagens
- Otimização de assets
- Build otimizado para produção

## 📊 Projetos Incluídos

### React
- **Alura-Space**: Galeria de imagens moderna
- **Cinetag**: Catálogo de filmes e séries
- **Organo**: Criação de cards dinâmicos

### HTML/CSS/JavaScript
- **Beautysalon**: Site de salão de beleza
- **Doctor Care**: Site de clínica médica
- **Refound**: Template de controle financeiro
- **Foco Timer**: Aplicação de pomodoro
- **Mochila de Viagem**: Checklist com localStorage
- **IMC**: Calculadora de índice de massa corporal
- **Jogo do Número Secreto**: Jogo interativo

## 🔧 Configuração

### Variáveis de Ambiente
O projeto não requer variáveis de ambiente específicas para funcionamento local.

### Personalização
Para personalizar o portfólio:

1. **Informações Pessoais**: Edite os componentes `HomeSection.vue` e `AboutSection.vue`
2. **Projetos**: Modifique o array de projetos em `MyProjects.vue`
3. **Estilos**: Ajuste as variáveis CSS em `main.css`
4. **Imagens**: Substitua as imagens em `assets/projects/`

## 📈 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

### GitHub Pages
1. Execute `npm run build`
2. Configure o GitHub Actions para deploy automático

## 📞 Contato

- **LinkedIn**: [Murilo Oliveira](https://www.linkedin.com/in/murilo-oliveira-28ab52248/)
- **GitHub**: [@devMuriloOliveira](https://github.com/devMuriloOliveira)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
