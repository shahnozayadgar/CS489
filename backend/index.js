const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const mbtiRoutes = require('./routes/mbtiRoutes'); 
const testRoutes = require('./routes/scenario-question');
const responseRoutes = require("./routes/responseRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

const port = process.env.PORT || 5001;

app.use('/api/mbti', mbtiRoutes);
app.use('/api/test', testRoutes);
app.use('/api/user', userRoutes);
app.use("/api/response", responseRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});