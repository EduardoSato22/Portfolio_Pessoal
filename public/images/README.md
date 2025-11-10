# Pasta de Imagens dos Projetos

Coloque aqui as imagens dos seus projetos.

## Como adicionar imagens:

1. Coloque suas imagens nesta pasta (`public/images/`)
2. Nomeie as imagens de forma descritiva, por exemplo:
   - `api-rest-cache-jwt.jpg`
   - `cep-api-correios.jpg`
   - `api-pokemon.jpg`

3. No arquivo `src/components/Projects.jsx`, atualize o campo `image` de cada projeto:

```javascript
{
  id: 1,
  title: "API REST Full com Cache e JWT",
  // ... outros campos ...
  image: "/images/api-rest-cache-jwt.jpg"  // ← Adicione o caminho aqui
}
```

## Formatos suportados:
- JPG/JPEG
- PNG
- WebP (recomendado para melhor performance)

## Tamanho recomendado:
- Largura: 800px
- Altura: 450px (proporção 16:9)
- Ou qualquer proporção similar que funcione bem

## Exemplo completo:

```javascript
{
  id: 1,
  title: "API REST Full com Cache e JWT",
  description: "API RESTful completa...",
  technologies: ["Node.js", "Express", "JWT", "Cache"],
  previewUrl: "https://backend-api-rest-full-cache-jwt.vercel.app/",
  githubUrl: "https://github.com/EduardoSato22/Backend_API_RestFull_Cache_JWT",
  icon: Server,
  color: "blue",
  image: "/images/api-rest-cache-jwt.jpg"  // ← Sua imagem real
}
```

