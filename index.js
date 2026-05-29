const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Amada App is running 🚀");
});

// New API route
app.get("/status", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is healthy",
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});