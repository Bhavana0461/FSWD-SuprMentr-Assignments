const express = require("express");

const router = express.Router();

// GET All Books
router.get("/", (req, res) => {

    res.json([
        {
            id: 1,
            title: "Java Programming",
            price: 500
        },
        {
            id: 2,
            title: "React Basics",
            price: 700
        }
    ]);

});

// GET Single Book
router.get("/:id", (req, res) => {

    res.json({
        id: req.params.id,
        title: "Sample Book"
    });

});

module.exports = router;
