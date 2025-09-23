# Como Fazer Deploy na Vercel

Este guia detalha os passos para fazer o deploy do seu site de portfólio (criado com React) na plataforma Vercel. O Vercel é uma plataforma de deploy e hospedagem para projetos frontend, ideal para aplicações React.

## Pré-requisitos

1.  **Conta Vercel:** Certifique-se de ter uma conta Vercel. Você pode se cadastrar gratuitamente usando sua conta GitHub, GitLab ou Bitbucket.
2.  **Git:** Seu projeto deve estar versionado em um repositório Git (GitHub, GitLab, Bitbucket).
3.  **Node.js e npm/pnpm:** Instalados em sua máquina local (para testes locais, se necessário).

## Passos para o Deploy

### Opção 1: Deploy via Interface Web do Vercel (Recomendado)

Esta é a maneira mais fácil e comum de fazer o deploy de projetos no Vercel.

1.  **Faça o Push do seu Código para um Repositório Git:**
    Seu projeto React (`portfolio-eduardo-sato`) precisa estar em um repositório online (GitHub, GitLab ou Bitbucket). Se ainda não estiver, siga estes passos:
    ```bash
    cd /home/ubuntu/portfolio-eduardo-sato # Navegue até a pasta do seu projeto
    git init
    git add .
    git commit -m "Initial portfolio commit"
    git branch -M main
    git remote add origin <URL_DO_SEU_REPOSITORIO_GIT> # Ex: https://github.com/seu-usuario/seu-portfolio.git
    git push -u origin main
    ```
    *Substitua `<URL_DO_SEU_REPOSITORIO_GIT>` pelo link do seu repositório.* Se você não tem um repositório, crie um novo no GitHub (ou similar) e siga as instruções para adicionar o `remote`.

2.  **Importe seu Projeto no Vercel:**
    *   Acesse o [Vercel Dashboard](https://vercel.com/dashboard).
    *   Clique em **"Add New..."** e selecione **"Project"**.
    *   Selecione o provedor Git onde seu projeto está hospedado (GitHub, GitLab, Bitbucket).
    *   Autorize o Vercel a acessar seus repositórios, se ainda não o fez.
    *   Encontre e selecione o repositório do seu portfólio (`seu-portfolio`).
    *   Clique em **"Import"**.

3.  **Configure o Projeto (se necessário):**
    O Vercel geralmente detecta automaticamente que é um projeto React e configura as opções de build. No entanto, verifique:
    *   **Framework Preset:** Deve ser `Create React App` ou `Vite` (dependendo de como o projeto foi criado, neste caso, Vite).
    *   **Root Directory:** Geralmente é `/` (a raiz do seu repositório).
    *   **Build Command:** `npm run build` ou `pnpm run build` (o Vercel detecta automaticamente).
    *   **Output Directory:** `dist` (o Vercel detecta automaticamente).

4.  **Faça o Deploy:**
    *   Clique em **"Deploy"**.
    *   O Vercel irá clonar seu repositório, instalar as dependências, construir o projeto e fazer o deploy. Isso pode levar alguns minutos.

5.  **Acesse seu Site:**
    Após o deploy ser concluído, o Vercel fornecerá uma URL pública para o seu site. Você também pode configurar um domínio personalizado posteriormente.

### Opção 2: Deploy via Vercel CLI (Linha de Comando)

Esta opção é útil para automação ou se você prefere a linha de comando.

1.  **Instale a Vercel CLI:**
    ```bash
    npm install -g vercel
    ```
    ou com pnpm:
    ```bash
    pnpm install -g vercel
    ```

2.  **Faça Login no Vercel:**
    ```bash
    vercel login
    ```
    Isso abrirá uma página no seu navegador para você fazer login na sua conta Vercel.

3.  **Navegue até a Pasta do Projeto:**
    ```bash
    cd /home/ubuntu/portfolio-eduardo-sato
    ```

4.  **Faça o Deploy:**
    ```bash
    vercel
    ```
    A CLI fará algumas perguntas (se é um novo projeto, qual o nome, etc.). Confirme as opções padrão. O Vercel detectará automaticamente as configurações de build para seu projeto React.

5.  **Acesse seu Site:**
    A CLI fornecerá a URL do seu deploy após a conclusão.

## Atualizando seu Portfólio

Sempre que você fizer alterações no seu código e fizer `git push` para o branch principal (geralmente `main` ou `master`) do seu repositório Git, o Vercel detectará automaticamente as mudanças e fará um novo deploy do seu site. Isso é chamado de **Continuous Deployment**.

Se você usou a CLI, basta executar `vercel` novamente na pasta do projeto para fazer um novo deploy.

