# video-project-tracker
a video project tracking site for managing the video preproduction and its related to do list 


# 🎬 Video Project Tracker

A lightweight full-stack application to track video production tasks like scripting, editing, and publishing. It helps you monitor and manage the progress of multiple video projects easily.

---

## 🧩 Tech Stack

- **Frontend:** React + Material UI (MUI)
- **Backend:** Node.js + Express
- **API:** RESTful endpoints
- **State Management:** React Hooks
- **Data Storage:** In-memory (no database)

---

## 🚀 Features

- Add new video projects with title and description
- View a list of all projects
- Delete completed or cancelled projects
- Clean and responsive UI

---

## 📁 Project Structure

---

## 🔧 Installation & Setup

### 1. Backend Setup

```bash
cd server
npm init -y
npm install express cors
node app.js

2.frontend

cd client
npx create-react-app .
npm install @mui/material @emotion/react @emotion/styled axios
npm start

the flow

project-root/
│
├── client/                # React frontend
│   ├── public/
│   └── src/
│       └── App.js
│       └── index.js
│       └── index.html
│
├── server/                # Express backend
│   └── app.js
