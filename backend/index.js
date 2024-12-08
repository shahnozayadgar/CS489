const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const mbtiRoutes = require('./routes/mbtiRoutes'); 
const testRoutes = require('./routes/scenario-question');
const responseRoutes = require("./routes/responseRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const allowedOrigins = ['https://ethics-quest.onrender.com']; // Adjust to match your frontend domain
app.use(cors({
  origin: allowedOrigins
}));

app.use(express.json());

// Serve static files from the React app (dist folder)
app.use(express.static(path.join(__dirname, 'dist')));

// Serve images folder (already in your existing code)
app.use('/images', express.static(path.join(__dirname, 'images')));

// API routes
app.use('/api/mbti', mbtiRoutes);
app.use('/api/test', testRoutes);
app.use('/api/user', userRoutes);
app.use("/api/response", responseRoutes);

// Serve React app's index.html for any other requests (for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Test route for backend
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
