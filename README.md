# 📘 Node.js & Express Learning Repository

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Learning-blue?logo=express)
![License](https://img.shields.io/badge/License-MIT-yellow)


This repository represents a **solid foundation in Node.js and Express.js**, covering basics, routing, Web APIs, and structured assignments. It serves as an educational portfolio documenting my journey in server-side JavaScript development.

---

## 📂 Repository Structure
NodeJS/
├── Hello World/        # Basic Node.js server example with a hello world node app
├── ExpressJS/          # Routing and route parameters servers
├── WebAPI/             # RESTful API example
├── Assignment.rar      # Contains assignment solutions
└── README.md

---

## 📝 Exercises Overview
### **Exercise 1: Hello World**
- Created a simple Node.js server using the `http` module.  
- Learned how to respond with plain text (`Hello World`).  

### **Exercise 2: ExpressJS Routes**
- Practiced **basic routing** with Express.  
- Implemented routes for `/`, `/about`, `/contact`, and HTML responses.  

### **Exercise 3: Web API**
- Built a RESTful API with Express.  
- Implemented endpoints to return JSON data and handle parameters.  

---

## 📚 Assignments
### **Assignment 1: Static Files Server**
- Built an Express server that serves static files (images, CSS, JS, HTML) from a `public` directory.  
- Used **Express static middleware**.  

### **Assignment 2: HTML File Serving**
- Served predefined HTML files from routes:  
  - `/aboutus` → `aboutuspage.html`  
  - `/contactus` → `contactuspage.html`  
  - `/` → `homepage.html`  
- Used **`res.sendFile()`** method.  

### **Assignment 3: Countries Web API**
- Created a Web API for JSON data about 10 countries (id, name, capital, language).  
- Endpoints:  
  - `GET /countries` → returns all countries.  
  - `POST /countries` → adds a new country (tested with HTML form).  
  - `GET /countries/:id` → returns country by id.  
  - `DELETE /countries/:id` → deletes country by id.  

---

## 🎯 Learning Outcomes
- Mastered **Node.js basics**: servers, modules, file system.  
- Practiced **ExpressJS routing** and middleware.  
- Built **REST APIs** with JSON responses.  
- Completed **three structured assignments** consolidating core skills.  

---

## ▶️ How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/royakais/NodeJS.git
   cd NodeJS

## to install dependancies
npm install

## to run any file:
node filename.js
