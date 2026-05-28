const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Sample API
app.get("/tasks", (req, res) => {
    res.json([
        { id: 1, task: "Learn React" },
        { id: 2, task: "Learn Node.js" },
        { id: 3, task: "Build Full Stack App" }
    ]);
});

app.listen(3000, () => {
    console.log("Backend running on port 3000");
});
