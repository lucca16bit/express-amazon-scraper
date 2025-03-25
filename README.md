[Leia em Português](README.pt-br.md)
# Express Amazon Scraper

This project is a simple scraper that extracts product information from Amazon based on a provided keyword. It uses a Node.js backend with Express and a frontend built with HTML, CSS, and pure JavaScript.

## Features

- Search for products on Amazon based on a keyword.
- Display results on the frontend in a modern and responsive layout.
- Filter out products with incomplete information (N/A).

## Technologies Used

- Backend: Node.js, Express, Axios, JSDOM.
- Frontend: HTML, CSS, JavaScript.
- Other Dependencies: `cors` to handle CORS.

## How to Run the Project

### 1. Clone the Repository
```bash
    git clone https://github.com/your-username/express-amazon-scraper.git
    cd express-amazon-scraper
```

### 2. Backend Setup
- Navigate to the `backend` folder:

```bash
    cd backend
```

- Install the dependencies:

```bash
    npm install
```

- Start the server:

```bash
    npm run dev
```

The server will be running at `http://localhost:3000`.

### 3. Frontend Setup

- Navigate to the `frontend` folder:

```bash
    cd ../frontend
```

- Open the `index.html` file in your browser:
    - If you're using VS Code, you can use the Live Server extension to open the file.
    - Alternatively, double-click the `index.html` file to open it directly in your browser.

### 4. How to Use

1. On the frontend, enter a keyword in the search field.
2. Click the "Search" button.
3. The product results will be displayed in a grid layout.

## ⚠️ Possible Issues

### Error 503 (Service Unavailable)
Amazon may block automated requests.
Solutions:
- Add headers like `User-Agent` in the backend.
- Use proxies to avoid being blocked.
- Add delays between requests.