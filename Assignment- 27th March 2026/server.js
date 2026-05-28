const express = require("express");

const app = express();

app.use(express.json());

// Sample Tasks Array
let tasks = [
    {
        id: 1,
        title: "Learn React"
    },
    {
        id: 2,
        title: "Build API"
    }
];

// GET All Tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// GET Single Task
app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(
        (t) => t.id == req.params.id
    );

    if(task) {
        res.json(task);
    } else {
        res.status(404).json({
            message: "Task Not Found"
        });
    }
});

// CREATE Task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task Added Successfully",
        task: newTask
    });
});

// UPDATE Task
app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(
        (t) => t.id == req.params.id
    );

    if(task) {
        task.title = req.body.title;

        res.json({
            message: "Task Updated Successfully",
            task
        });
    } else {
        res.status(404).json({
            message: "Task Not Found"
        });
    }
});

// DELETE Task
app.delete("/tasks/:id", (req, res) => {
    const taskIndex = tasks.findIndex(
        (t) => t.id == req.params.id
    );

    if(taskIndex !== -1) {
        tasks.splice(taskIndex, 1);

        res.json({
            message: "Task Deleted Successfully"
        });
    } else {
        res.status(404).json({
            message: "Task Not Found"
        });
    }
});

// Home Route
app.get("/", (req, res) => {
    res.send("Task API Running");
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
