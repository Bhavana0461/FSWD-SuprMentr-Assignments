const express = require("express");

const app = express();

// Import Routes
const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");

// Middleware
app.use(express.json());

// Use Routes
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Bookstore API Running");
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
