# Student Job Tracker

![Job Tracker Banner](https://img.shields.io/badge/Student-Job%20Tracker-blue)

A full-stack web application for students to track and manage their job applications. Keep all your job applications organized in one place with status tracking, date sorting, and easy management.

## 🌟 Features

- **Track Job Applications**: Store company names, roles, application dates, and job links
- **Status Management**: Update application status (Applied, Interview, Offer, Rejected)
- **Sorting & Filtering**: Filter by application status and sort by date
- **Responsive Design**: Works seamlessly on mobile and desktop devices

## 🛠️ Technologies Used

### Frontend
- React v19
- Vite
- Tailwind CSS
- ES6+

### Backend
- Node.js
- Express
- MongoDB (with Mongoose ODM)
- RESTful API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local installation or cloud account)

## 🚀 Installation

### Clone the repository
```bash
git clone https://job-tracker-cuvette.vercel.app/
cd Cuvette-assignment
```

### Backend Setup
1. Navigate to the backend directory
```bash
cd backend
```

2. Install dependencies
```bash
npm install
# or
bun install
```

3. Create a .env file
```bash
cp .env.example .env
```

4. Update the .env file with your MongoDB URI
```
MONGODB_URI="your_mongodb_connection_string"
```

5. Start the backend server
```bash
npm start
# or
bun start
```

The server will run on port 5000 by default.

### Frontend Setup
1. Navigate to the root directory (in a new terminal)
```bash
cd ..
```

2. Install dependencies
```bash
npm install
# or
bun install
```

3. Create a .env file
```bash
cp .env.example .env
```

4. Update the .env file if your backend is running on a different port
```
VITE_API_URL="http://localhost:5000"
```

5. Start the frontend development server
```bash
npm run dev
# or
bun run dev
```

The application will open in your browser at `http://localhost:5173` or another available port.

## 📱 Usage

### Adding a Job
1. Fill in the job application details in the "Add New Job Application" form
2. Click "Add Job Application"
3. Your new job entry will appear in the list below

### Managing Jobs
- **View Details**: Click on a job card to expand and see more information
- **Filter Applications**: Use the filter buttons to show applications by status
- **Sort by Date**: Toggle date sorting to see the latest applications first
- **Update Status**: Change the application status using the dropdown menu in the expanded card
- **Delete**: Remove a job application using the delete button

---

## 📊 Project Structure

```
Cuvette-assignment/
├── backend/                 # Express server
│   ├── server.mjs           # Main server file with API endpoints
│   └── package.json         # Backend dependencies
│
├── src/                     # Frontend React application
│   ├── components/          # React components
│   │   ├── FilterBar.jsx    # Status filter and date sort controls
│   │   ├── JobCard.jsx      # Individual job listing component
│   │   ├── JobForm.jsx      # Form for adding new jobs
│   │   └── JobList.jsx      # Container for job cards
│   ├── App.jsx              # Main application component
│   └── main.jsx             # React entry point
│
└── package.json             # Frontend dependencies
```

