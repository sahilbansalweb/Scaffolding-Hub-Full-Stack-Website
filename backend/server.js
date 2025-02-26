const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const blogsRouter = require("./routes/blogRoutes");
const productsRouter = require("./routes/productRoutes");
const messagesRouter = require("./routes/messages");
const { router: authRouter, verifyToken } = require("./routes/auth");


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Connect to SQLite database
const db = new sqlite3.Database("./database/scaffoldinghub.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

// API Route to Fetch Blogs
app.get("/api/blogs", (req, res) => {
    db.all("SELECT * FROM blogs", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get("/api/products", (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        if (err) {
            console.error("Database error:", err);
            res.status(500).json({ error: "Database error" });
        } else {
            console.log("Fetched Products:", rows); // Debugging
            res.json(rows);
        }
    });
});

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const query = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
    db.run(query, [name, email, message], function (err) {
        if (err) {
            console.error("Database error:", err.message);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json({ success: "Message sent successfully" });
    });
});

// Authentication Route
app.use("/api/auth", authRouter);

app.use("/api/blogs", blogsRouter);
app.use("/api/products", productsRouter);
app.use("/api/messages", messagesRouter);


// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
