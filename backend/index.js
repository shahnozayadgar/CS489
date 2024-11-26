const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const testRoutes = require('./routes/test');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});