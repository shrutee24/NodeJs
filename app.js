const express = require('express'); // Import express
const app = express(); // Create an express app
const port = 3000; // Define a port number

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Shruti! This is your first Node.js app.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
