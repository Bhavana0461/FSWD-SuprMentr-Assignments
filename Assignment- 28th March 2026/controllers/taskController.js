const tasks = require("../models/taskModel");

// GET All Tasks
const getTasks = (req, res) => {
    res.json(tasks);
};

// CREATE Task
const createTask = (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task Created",
        task: newTask
    });
};

// UPDATE Task
const updateTask = (req, res) => {
    const task = tasks.find(
        (t) => t.id == req.params.id
    );

    if(task) {
        task.title = req.body.title;

        res.json({
            message: "Task Updated",
            task
        });
    } else {
        res.status(404).json({
            message: "Task Not Found"
        });
    }
};

// DELETE Task
const deleteTask = (req, res) => {
    const taskIndex = tasks.findIndex(
        (t) => t.id == req.params.id
    );

    if(taskIndex !== -1) {
        tasks.splice(taskIndex, 1);

        res.json({
            message: "Task Deleted"
        });
    } else {
        res.status(404).json({
            message: "Task Not Found"
        });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};
