const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./database/scaffoldinghub.db');

// Get all blogs
router.get('/', (req, res) => {
    db.all(`SELECT * FROM blogs ORDER BY created_at DESC`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Get a single blog by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get(`SELECT * FROM blogs WHERE id = ?`, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.json(row);
    });
});

// Add a new blog
router.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }
    db.run(`INSERT INTO blogs (title, content) VALUES (?, ?)`, [title, content], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, title, content });
    });
});

// Delete a blog by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM blogs WHERE id = ?`, [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Blog deleted successfully" });
    });
});

module.exports = router;
