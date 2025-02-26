const express = require("express");
const router = express.Router();
const db = require("../database");

// Get all messages
router.get("/", (req, res) => {
    db.all("SELECT * FROM messages", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Store a new message
router.post("/", (req, res) => {
    const { name, email, phone, message } = req.body;
    db.run("INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)", [name, email, phone, message], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Message saved!" });
    });
});

module.exports = router;
