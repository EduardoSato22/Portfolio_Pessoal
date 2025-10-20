# 🚀 Portfólio Profissional - Eduardo Sato

Portfólio pessoal moderno e responsivo desenvolvido com HTML5, CSS3 e JavaScript puro, seguindo as melhores práticas de desenvolvimento web.

## 📁 Estrutura do Projeto

```
Meu Portifolio/
├── index.html              # Página principal do portfólio
├── curriculo.html          # Página do currículo interativo
├── styles.css              # Estilos customizados
├── script.js               # Funcionalidades JavaScript
├── public/                 # Arquivos estáticos
│   ├── Certificados/       # PDFs dos certificados
│   ├── Minha_foto.jpeg     # Foto do perfil
│   └── Curriculo_Eduardo_Sato.pdf
├── dist/                   # Build de produção (gerado automaticamente)
├── package.json            # Configurações do projeto
├── tailwind.config.js      # Configuração do Tailwind CSS
├── vite.config.js          # Configuração do Vite
└── README.md               # Este arquivo
```

## 🎯 Características

### ✨ **Design Moderno**

- **Tema escuro** com gradiente radial sutil
- **Tipografia Inter** para melhor legibilidade
- **Ícones Lucide** para interface intuitiva
- **Animações suaves** e transições elegantes
- **Design responsivo** para todos os dispositivos

### 🛠️ **Tecnologias Utilizadas**

- **HTML5** semântico e acessível
- **CSS3** com variáveis customizadas
- **JavaScript ES6+** modular e organizado
- **Tailwind CSS** via CDN para estilização rápida
- **Lucide Icons** para ícones modernos

### 📱 **Funcionalidades**

#### **Navegação**

- Menu responsivo com toggle mobile
- Scroll suave entre seções
- Navegação por teclado (acessibilidade)

#### **Seções do Portfólio**

- **Hero**: Apresentação pessoal e call-to-action
- **Projetos**: Showcase com previews interativos via iframe
- **Sobre**: Informações pessoais e localização
- **Experiência**: Timeline profissional
- **Formação**: Educação e certificações
- **Habilidades**: Competências técnicas com barras de progresso
- **Contato**: Formulário funcional com validação

#### **Currículo Interativo**

- **Embed do Canva** com controles de zoom
- **Botão de tela cheia** para melhor visualização
- **Download do PDF** direto
- **Navegação responsiva** no documento

#### **Certificações**

- **28 certificações** organizadas por categoria
- **Botão "Ver Todas"** para expandir lista
- **Links diretos** para visualização dos PDFs
- **Ícones coloridos** para categorização visual

## 🚀 Como Usar

### **Desenvolvimento Local**

1. Clone o repositório
2. Abra `index.html` em qualquer navegador moderno
3. Para desenvolvimento com hot-reload, use:
   ```bash
   npm run dev
   ```

### **Produção**

1. Execute o build:
   ```bash
   npm run build
   ```
2. Os arquivos otimizados estarão na pasta `dist/`

## 📋 Estrutura de Arquivos

### **index.html**

- Página principal do portfólio
- Estrutura semântica HTML5
- Links para seções internas
- Formulário de contato funcional

### **curriculo.html**

- Página dedicada ao currículo
- Embed interativo do Canva
- Controles de zoom e navegação
- Link para download do PDF

### **styles.css**

- Estilos customizados organizados por seção
- Variáveis CSS para consistência
- Animações e transições
- Media queries para responsividade
- Estilos para acessibilidade

### **script.js**

- Funcionalidades JavaScript modulares
- Event listeners organizados
- Validação de formulários
- Controles do currículo interativo
- Utilitários e helpers

## 🎨 Personalização

### **Cores**

As cores principais estão definidas no Tailwind CSS:

- **Primária**: `sky-400` (#0ea5e9)
- **Fundo**: `gray-900` (#111827)
- **Texto**: `gray-200` (#e5e7eb)

### **Conteúdo**

1. **Informações pessoais**: Edite diretamente no HTML
2. **Projetos**: Adicione/remova na seção correspondente
3. **Certificações**: Adicione PDFs na pasta `public/Certificados/`
4. **Experiências**: Atualize a timeline profissional

### **Estilos**

- **CSS customizado**: Edite `styles.css`
- **Classes Tailwind**: Use as classes do Tailwind para ajustes rápidos
- **Responsividade**: Ajuste os breakpoints conforme necessário

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Acessibilidade

- **Navegação por teclado** implementada
- **Contraste adequado** para leitura
- **Alt texts** em todas as imagens
- **Estrutura semântica** HTML5
- **Focus management** para elementos interativos

## 🔧 Manutenção

### **Adicionar Nova Certificação**

1. Adicione o PDF na pasta `public/Certificados/`
2. Adicione o card na seção de certificações do HTML
3. Use a classe `data-cert="extra"` para aparecer no "Ver Todas"

### **Adicionar Novo Projeto**

1. Adicione o card na seção de projetos
2. Configure o iframe com a URL do projeto
3. Ajuste o título, descrição e tecnologias

### **Atualizar Informações Pessoais**

1. Edite diretamente no HTML
2. Atualize a foto em `public/Minha_foto.jpeg`
3. Mantenha a consistência entre as páginas

## 📈 Performance

- **CSS e JS externos** para melhor cache
- **Lazy loading** para imagens
- **Minificação** automática no build
- **CDN** para bibliotecas externas
- **Otimização** de imagens

## 🌐 Deploy

### **Vercel (Recomendado)**

1. Conecte o repositório ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### **Netlify**

1. Conecte o repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

### **GitHub Pages**

1. Ative GitHub Pages no repositório
2. Configure a branch `gh-pages`
3. Use a pasta `dist` como source

## 📞 Suporte

Para dúvidas ou sugestões:

- **Email**: contato@eduardosato.com
- **LinkedIn**: [Eduardo Sato](https://www.linkedin.com/in/esato-)
- **GitHub**: [EduardoSato22](https://github.com/EduardoSato22)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ por Eduardo Sato**
