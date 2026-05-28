const express = require("express");

const router = express.Router();

const users = require("../data/users");

// GET USERS
router.get("/", (req, res) => {
    res.json(users);
});

module.exports = router;
