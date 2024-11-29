const express = require('express');
const cors = require('cors');
require('dotenv').config();

const mbtiRoutes = require('./routes/mbtiRoutes'); 
const testRoutes = require('./routes/test');
const responseRoutes = require("./routes/responseRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

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