
***

# 🚀 Sample Dockerized Node.js Project  
<img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="60"/>
<img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker Logo" width="80"/>
 
  
  

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
