const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Admin Credentials (Change these if needed)
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "password123";
const SECRET_KEY = "your_secret_key"; // Change this to a secure key

// Admin Login
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Generate JWT Token
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ token });
    } else {
        res.status(401).json({ error: "Invalid credentials" });
    }
});

// Verify Token Middleware
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ error: "No token provided" });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ error: "Unauthorized" });
        req.user = decoded;
        next();
    });
};

module.exports = { router, verifyToken };
