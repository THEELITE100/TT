# 🌟 Task Tracker

A full stack Task Management Dashboard built with the **MERN** stack (MongoDB, Express, React, Node.js). 

Designed with a modern dark mode aesthetic (inspired by Linear and Tesla interfaces), and a fully responsive grid layout.

---

## ✨ Features

- **Fluid UI & Animations**: Powered by Framer Motion for spring-loaded modals, layout transitions, and animated statistics.
- **Modern Design**: Deep dark mode, frosted glassmorphism elements, and minimalist iconography using Lucide React.
- **Dashboard Analytics**: Real-time progress tracking and statistics overview.
- **Full CRUD Functionality**: Create, Read, Update, and Delete tasks via a custom REST API.

---

## 🛠️ Tech Stack

**Frontend**
- **React.js** (Bootstrapped with Vite for lightning-fast HMR)
- **Tailwind CSS v4** (Utility-first styling with custom theme variables)
- **Framer Motion** (Production-ready animation library)
- **Lucide React** (Beautiful, consistent icons)

**Backend**
- **Node.js & Express.js** (RESTful API architecture)
- **MongoDB** (NoSQL database)
- **Mongoose** (Elegant Object Data Modeling)
- **Dotenv** (Environment variable management)
- **Cors** (Cross-Origin Resource Sharing)

---

## 📂 Project Structure

```text
task-tracker/
├── backend/
│   ├── .env                 # Environment variables (Database URI, Port)
│   ├── .gitignore
│   ├── package.json         # Backend dependencies & scripts
│   ├── server.js            # Entry point for Express server
│   ├── models/
│   │   └── Task.js          # Mongoose schema for Tasks
│   └── routes/
│       └── taskRoutes.js    # API endpoints (GET, POST, PUT, DELETE)
└── frontend/
    ├── package.json         # Frontend dependencies & scripts
    ├── vite.config.js       # Vite configuration
    ├── index.html           # Main HTML file
    └── src/
        ├── index.css        # Tailwind v4 theme configuration
        ├── main.jsx         # React DOM renderer
        ├── App.jsx          # Main application component
        └── components/
            ├── TaskStats.jsx # Dashboard analytics
            ├── TaskList.jsx  # Animated grid layout & filters
            ├── TaskItem.jsx  # Individual task cards
            └── TaskForm.jsx  # Animated creation/editing modal
```

## 🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.
1.Prerequisites:
Node.js (v16 or higher)
MongoDB (Local server running, or an Atlas URI)

2.Clone the Repository
```Bash
git clone [https://github.com/your-username/task-tracker.git](https://github.com/your-username/task-tracker.git)
```
3.Backend Setup
Open a terminal and navigate to the backend directory
```Bash
cd backend
npm install
```
Create a .env file in the root of the backend folder and add the following:
Code snippetPORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/task-tracker-luxury
Start the backend server
```Bash
npm run dev
```
The server will start on http://localhost:5000.

4.Frontend Setup
Open a new terminal window and navigate to the frontend directory
```Bash
cd frontend
npm install
```
Start the Vite development server
```Bash
npm run dev
```
The frontend will start on http://localhost:5173.

## 💡 Future Enhancements
User Authentication: Add JWT (JSON Web Tokens) to allow multiple users to have private task lists.
Drag & Drop: Implement Kanban-style drag and drop for task status updates.Pagination: For users with hundreds of tasks to maintain optimal performance.
Due Dates: Add a date-picker to set deadlines for specific tasks.

### Live at: https://focus-six-ecru.vercel.app/

## 📝 License
This project is open-source and available under the MIT License.