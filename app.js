// Import required modules
const express = require("express");

// Create an Express application
const app = express();

// Define route handler for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to my Express.js server!");
});

// Configure the application to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
