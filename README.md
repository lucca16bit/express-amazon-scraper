# Express Amazon Scraper

Este projeto é um scraper simples que extrai informações de produtos da Amazon com base em uma palavra-chave fornecida. Ele utiliza um backend em Node.js com Express e um frontend em HTML, CSS e JavaScript puro.

## Funcionalidades

- Busca produtos na Amazon com base em uma palavra-chave.
- Exibe os resultados no frontend em um layout moderno e responsivo.
- Filtra produtos com informações incompletas (N/A).

## Tecnologias Utilizadas

- Backend: Node.js, Express, Axios, JSDOM.
- Frontend: HTML, CSS, JavaScript.
- Outras Dependências: cors para lidar com CORS.

##  Como Executar o Projeto

### 1. Clone o repositório
```bash
    git clone https://github.com/seu-usuario/express-amazon-scraper.git
    cd express-amazon-scraper
```

### 2. Configuração do Backend
- Navegue até a pasta backend:

```bash
    cd backend
```

- Instale as dependências:

```bash
    npm install
```

- Inicie o servidor:

```bash
    npm run dev
```

O servidor estará rodando em http://localhost:3000.

Inicie o servidor:

### 3. Configuração do Frontend

```bash
    cd ../frontend
```

- Abra o arquivo index.html no navegador:
    - Se estiver usando o VS Code, você pode usar a extensão Live Server para abrir o arquivo.
    - Ou clique duas vezes no arquivo index.html para abri-lo diretamente no navegador.

### 4. Como Usar

1. No frontend, insira uma palavra-chave no campo de busca.
2. Clique no botão "Search".
3. Os resultados dos produtos serão exibidos em um layout de grade.

## ⚠️ Possíveis Problemas

Erro 503 (Service Unavailable)
A Amazon pode bloquear requisições automatizadas.
Soluções:
- Adicione cabeçalhos como User-Agent no backend.
- Use proxies para evitar bloqueios.
- Adicione atrasos entre as requisições.