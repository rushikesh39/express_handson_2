const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Define a route for /api/main
app.get('/', (req, res) => {
  res.send(
  { "what is express":'Express is a fast, unopinionated, and minimalist web framework for Node.js. It simplifies the process of building robust and scalable web applications.',}
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
