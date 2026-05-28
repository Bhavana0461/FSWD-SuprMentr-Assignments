const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/blogplatform")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

// Home Route
app.get("/", (req, res) => {
    res.send("Blog Platform Database Connected");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
