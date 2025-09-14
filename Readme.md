
***

# 🚀 Sample Dockerized Node.js Project  
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=n  
  
![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=d  
  
  
![License](https://img.shields.io/badge  
  
  
  
![Status](https://img.shields.io/badge  
  
  
  
  

This is a simple **Node.js + Express** project containerized using **Docker**.  
It serves a basic web page to demonstrate how to run Node.js applications inside Docker containers.  

***

## 📌 Features
- ✅ Node.js + Express server  
- ✅ Dockerfile included for containerization  
- ✅ Runs on port `3000` inside the container  
- ✅ Lightweight & easy to deploy  

***

## 📂 Project Structure
```
.
├── Dockerfile
├── package.json
├── package-lock.json
├── server.js
├── README.md
└── public/
    └── index.html
```

***

## ⚙️ Getting Started

### Prerequisites
- [Node.js 18.x](https://nodejs.org/) (optional, if running locally)  
- [Docker](https://www.docker.com/)  

### Run Locally
```bash
# Install dependencies
npm install

# Start the server
npm start
```
Server will be available at [http://localhost:3000](http://localhost:3000).

### Run with Docker
```bash
# Build the image
docker build -t node-docker-app .

# Run the container
docker run -p 3000:3000 node-docker-app
```
Now visit [http://localhost:3000](http://localhost:3000).  

***

## 📜 License
This project is licensed under the [MIT](LICENSE) license.

***

---

## 🔮 Future Improvements

* Add **multiple routes** (e.g., `/about`, `/contact`)
* Connect with a database (MongoDB/Postgres)
* Use **Docker Compose** for multi-service setup

---

## 👨‍💻 Author

**Albin Raju**
📌 MCA Student | Union Christian College, Aluva
🌐 GitHub: [albinraju29](https://github.com/albinraju29)

---
