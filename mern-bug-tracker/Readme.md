# MERN Bug Tracker

A simple bug tracking application with testing and debugging features.

## Installation

### Backend Setup
```bash
mkdir mern-bug-tracker && cd mern-bug-tracker
mkdir backend && cd backend
npm init -y
npm install express mongoose cors dotenv
npm install --save-dev jest supertest nodemon
```

### Frontend Setup
```bash
cd .. && npx create-react-app frontend
cd frontend
npm install axios
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## Running the Project

### Start Backend
```bash
cd backend
npm run dev
```

### Start Frontend
```bash
cd frontend
npm start
```

Access: `http://localhost:5000`

## Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Testing Approach

**Backend:**
- Unit tests for validation functions
- Integration tests for API endpoints
- Mock database operations

**Frontend:**
- Component rendering tests
- Form validation tests
- User interaction tests

**Coverage:** 90%+ for all components and functions

## Debugging Techniques

### Console Debugging
```javascript
console.log('Debug data:', data);
console.error('Error:', error);
```

### Chrome DevTools
- Network tab for API calls
- Console for errors
- React DevTools for components

### Node.js Debugging
```bash
node --inspect server.js
# Open chrome://inspect
```

## Features

- Create, view, update, delete bugs
- Status tracking (open, in-progress, resolved)
- Priority levels (low, medium, high)
- Form validation
- Error handling
- Comprehensive testing suite

## Project Structure
```
mern-bug-tracker/
├── backend/
│   ├── models/Bug.js
│   ├── routes/bugs.js
│   ├── tests/bugs.test.js
│   └── index.js
├── frontend/
│   ├── src/components/BugForm.js
│   ├── src/components/BugList.js
│   └── src/App.js
└── README.md
```