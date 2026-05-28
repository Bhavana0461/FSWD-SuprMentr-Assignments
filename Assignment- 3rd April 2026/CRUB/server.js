
const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/User");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crudlab")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


// CREATE
app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// READ
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// UPDATE
app.put("/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// DELETE
app.delete("/users/:id", async (req, res) => {
    try {

        await User.findByIdAndDelete(req.params.id);

        res.json({
            message: "User Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});







