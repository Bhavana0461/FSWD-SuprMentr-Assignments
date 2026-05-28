const express = require("express");

const router = express.Router();

// GET All Authors
router.get("/", (req, res) => {

    res.json([
        {
            id: 1,
            name: "Robert"
        },
        {
            id: 2,
            name: "John"
        }
    ]);

});

// GET Single Author
router.get("/:id", (req, res) => {

    res.json({
        id: req.params.id,
        name: "Sample Author"
    });

});

module.exports = router;
