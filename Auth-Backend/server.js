const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can change the port number as needed

// Middleware to parse JSON request bodies
app.use(express.json());

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
