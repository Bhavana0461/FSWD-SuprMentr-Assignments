const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Folder Architect Project Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
