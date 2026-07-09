# AI Learning Management System (AI-LMS)

AI-LMS is a full-stack web application built using the MERN stack that helps users learn new skills through personalized learning paths generated with AI.

Instead of searching for tutorials across different websites, users can simply enter the skill they want to learn, choose their current experience level, and set a learning duration. The application then generates a structured roadmap with daily lessons and quizzes. As users complete each lesson, their progress is tracked until they finish the entire roadmap.

This project was developed to combine AI with modern web technologies and create a more organized and engaging learning experience.

---

## Features

* User registration and login
* JWT-based authentication
* AI-generated learning roadmaps
* Daily lesson generation
* Quiz after each lesson
* Progress tracking
* Learning streaks
* User profile management
* Responsive design
* Protected routes

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

### AI

* LLM API for generating roadmaps, lessons, and quizzes

---

## Project Structure

```text
AI-LMS
│
├── client
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── layouts
│   │   ├── services
│   │   ├── context
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── config
│   ├── utils
│   └── server.js
│
└── README.md
```

---

## Pages

* Landing Page
* Register
* Login
* Dashboard
* Create Learning Roadmap
* Roadmap
* Daily Lesson
* Quiz
* Quiz Result
* Profile
* Settings
* 404 Page

---

## How It Works

1. Create an account or log in.
2. Enter the skill you want to learn.
3. Select your current level.
4. Choose a learning duration.
5. AI generates a personalized roadmap.
6. Complete one lesson each day.
7. Take the quiz after every lesson.
8. Track your overall progress from the dashboard.

---

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/AI-LMS.git
cd AI-LMS
```

### Install dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

### Create a `.env` file inside the `server` folder

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

LLM_API_KEY=your_api_key
```

### Run the application

Backend

```bash
npm run dev
```

Frontend

```bash
npm run dev
```

---

## Future Improvements

This project is still under development. Some features planned for future versions include:

* AI Tutor Chat
* Coding challenges
* Certificates after course completion
* XP and badges
* Leaderboards
* Study groups
* Notes and bookmarks
* Email notifications
* Admin dashboard
* Course recommendations

---

## Team Responsibilities

### Frontend

* Authentication pages
* Dashboard
* Learning pages
* Quiz interface
* Responsive UI

### Backend

* Authentication APIs
* Roadmap APIs
* Lesson APIs
* Quiz APIs
* Progress tracking

### AI Integration

* Roadmap generation
* Lesson generation
* Quiz generation

### Database

* MongoDB schema design
* Data management
* Deployment

---

## Development Timeline

| Week | Task                             |
| ---- | -------------------------------- |
| 1    | Project setup and authentication |
| 2    | AI roadmap generation            |
| 3    | Lesson generation                |
| 4    | Learning module                  |
| 5    | Quiz system                      |
| 6    | Progress tracking                |
| 7    | Dashboard improvements           |
| 8    | Testing and deployment           |

---

## Why I Built This Project

Most online learning platforms provide the same learning path for every user, regardless of their experience level or learning goals. I wanted to build a platform that creates a personalized learning experience using AI while also helping users stay consistent through progress tracking and daily lessons.

This project also helped me gain hands-on experience with the MERN stack, REST APIs, authentication, MongoDB, and AI integration.

---

## License

This project is available for learning and educational purposes.
