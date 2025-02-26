const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./database/scaffoldinghub.db');

// Get all products
router.get('/', (req, res) => {
    db.all(`SELECT * FROM products`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Get a single product by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get(`SELECT * FROM products WHERE id = ?`, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(row);
    });
});

// Add a new product
router.post('/', (req, res) => {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
        return res.status(400).json({ error: "All fields are required" });
    }
    db.run(`INSERT INTO products (name, description, price) VALUES (?, ?, ?)`, [name, description, price], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, name, description, price });
    });
});

// Delete a product by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM products WHERE id = ?`, [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Product deleted successfully" });
    });
});

module.exports = router;
