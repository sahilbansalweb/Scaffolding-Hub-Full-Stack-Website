const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.sqlite", (err) => {
    if (err) console.error("Database connection error: " + err.message);
    else console.log("Connected to the database.");
});

// Create Tables
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS blogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        content TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        price TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        phone TEXT,
        message TEXT
    )`);
});

module.exports = db;
