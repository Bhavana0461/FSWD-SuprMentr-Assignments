const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { verifyToken, isAdmin } = require("./middleware/auth");

const app = express();

app.use(express.json());

// LOGIN API
app.post("/login", (req, res) => {
    const { email } = req.body;

    // Example Role
    const role = email === "admin@gmail.com" ? "admin" : "user";

    // Generate Token
    const token = jwt.sign(
        {
            email,
            role
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login Successful",
        token
    });
});

// USER ROUTE
app.get("/user", verifyToken, (req, res) => {
    res.json({
        message: "Welcome User",
        user: req.user
    });
});

// ADMIN ROUTE
app.get("/admin", verifyToken, isAdmin, (req, res) => {
    res.json({
        message: "Welcome Admin"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
