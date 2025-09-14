// index.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>🚀 Welcome</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          text-align: center; 
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: #fff;
          margin: 0; 
          padding: 0;
        }
        header { padding: 2rem; }
        h1 { font-size: 2.5rem; }
        nav a {
          margin: 0 15px;
          text-decoration: none;
          color: #fff;
          font-weight: bold;
        }
        nav a:hover { text-decoration: underline; }
        footer {
          margin-top: 40px;
          padding: 1rem;
          background: rgba(0,0,0,0.2);
        }
      </style>
    </head>
    <body>
      <header>
        <h1>🚀 Hello from Dockerized Node.js Express Server!</h1>
        <p>Modern, simple & attractive 🎨</p>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/health">Health</a>
        </nav>
      </header>
      <main>
        <p>Welcome to your Docker + Node.js + Express demo app. 🎉</p>
        <p>Edit <code>index.js</code> to add more features!</p>
      </main>
      <footer>
        <p>💡 Powered by Express & Docker | Made with ❤️</p>
      </footer>
    </body>
    </html>
  `);
});

// About page
app.get('/about', (req, res) => {
  res.send(`
    <h1>ℹ️ About This App</h1>
    <p>This is a simple Express app running inside Docker.</p>
    <p>It demonstrates how to serve multiple pages 🚀.</p>
    <a href="/">⬅ Back to Home</a>
  `);
});

// Contact page
app.get('/contact', (req, res) => {
  res.send(`
    <h1>📞 Contact Us</h1>
    <p>Email: support@example.com</p>
    <p>Twitter: <a href="https://twitter.com" target="_blank">@ourhandle</a></p>
    <a href="/">⬅ Back to Home</a>
  `);
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is healthy ✅' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send(`
    <h1>❌ 404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn’t exist.</p>
    <a href="/">⬅ Back to Home</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log('===================================');
  console.log(`✅ App is running on port: ${PORT}`);
  console.log(`🌍 Open: http://localhost:${PORT}`);
  console.log('===================================');
});

