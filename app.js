const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from Node.jsss!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'developments'
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Node.js Hello World' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access your app: http://localhost:${PORT}`);
});