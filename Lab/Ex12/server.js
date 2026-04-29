const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "student_db"
});

db.connect(err => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});


// CREATE
app.post("/students", (req, res) => {
  const { name, course } = req.body;
  const sql = "INSERT INTO students (name, course) VALUES (?, ?)";
  db.query(sql, [name, course], (err, result) => {
    if (err) return res.send(err);
    res.send("Student added successfully");
  });
});


// READ
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});


// UPDATE
app.put("/students/:id", (req, res) => {
  const { name, course } = req.body;
  const sql = "UPDATE students SET name=?, course=? WHERE id=?";
  db.query(sql, [name, course, req.params.id], (err, result) => {
    if (err) return res.send(err);
    res.send("Student updated successfully");
  });
});


// DELETE
app.delete("/students/:id", (req, res) => {
  const sql = "DELETE FROM students WHERE id=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.send(err);
    res.send("Student deleted successfully");
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});