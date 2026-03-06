# Portfólio Eduardo Sato - React

![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73CE5?style=flat&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js_16+-43853D?style=flat&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

Portfólio profissional moderno e responsivo desenvolvido com React, Vite, Tailwind CSS e Framer Motion.

## 🚀 Características

- **React 18** com hooks modernos
- **Vite** para build rápido e otimizado
- **Tailwind CSS** para estilização
- **Framer Motion** para animações suaves
- **React Router** para navegação
- **Lucide React** para ícones
- **Tema claro/escuro** com persistência no localStorage
- **Formulário de contato** com validação
- **Currículo interativo** com Canvas embed
- **40+ certificações** organizadas
- **Totalmente responsivo**

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navigation.jsx   # Navegação principal
│   ├── Footer.jsx       # Rodapé
│   ├── Hero.jsx         # Seção hero
│   ├── Projects.jsx     # Seção de projetos
│   ├── About.jsx        # Seção sobre
│   ├── Experience.jsx   # Experiência profissional
│   ├── Education.jsx    # Formação e certificações
│   ├── Skills.jsx       # Habilidades
│   ├── Contact.jsx      # Formulário de contato
│   └── ThemeToggle.jsx  # Toggle de tema
├── pages/               # Páginas
│   ├── Home.jsx         # Página inicial
│   └── Curriculum.jsx   # Página do currículo
├── hooks/               # Hooks personalizados
│   └── useTheme.js      # Hook para gerenciar tema
├── App.jsx              # Componente principal
├── main.jsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linter
- `npm run format` - Formata código com Prettier

## 🚀 Deploy na Vercel

### Opção 1: Deploy Automático via GitHub

1. Faça push do código para um repositório GitHub
2. Conecte o repositório na Vercel
3. A Vercel detectará automaticamente que é um projeto Vite
4. O deploy será feito automaticamente

### Opção 2: Deploy via Vercel CLI

1. Instale a Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login na Vercel:
```bash
vercel login
```

3. Deploy do projeto:
```bash
vercel
```

### Configurações da Vercel

O projeto já está configurado com:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm ci`

## 📋 Pré-requisitos

- Node.js 16+ 
- npm 8+

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Portfolio_Pessoal
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🎨 Personalização

### Tema
O projeto suporta tema claro e escuro. O tema é persistido no localStorage e pode ser alterado pelo botão na navegação.

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.js` e `src/index.css`.

### Conteúdo
- **Projetos**: Edite o array `projects` em `src/components/Projects.jsx`
- **Experiência**: Edite o array `experiences` em `src/components/Experience.jsx`
- **Certificações**: Edite o array `certifications` em `src/components/Education.jsx`
- **Habilidades**: Edite o array `skills` em `src/components/Skills.jsx`

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔍 SEO

- Meta tags otimizadas
- Estrutura semântica HTML
- Alt text em imagens
- URLs amigáveis

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

**Eduardo Sato**
- LinkedIn: [linkedin.com/in/edsato](https://www.linkedin.com/in/edsato)
- GitHub: [github.com/EduardoSato22](https://github.com/EduardoSato22)
- Email: contato@eduardosato.com
