require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

// nếu cần serve static frontend trong production
// app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));

app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello from backend!' });
});

// ví dụ route
app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
