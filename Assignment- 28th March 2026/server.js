const express = require("express");

const app = express();

const taskRoutes = require("./routes/taskRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("MVC Refactor API Running");
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
