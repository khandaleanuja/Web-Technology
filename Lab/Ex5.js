const express = require('express');

const app = express();

const PORT = 3000;

/* -------------------- MIDDLEWARE -------------------- */

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next(); 
});

app.use(express.json());

/* -------------------- ROUTES -------------------- */

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

// About route
app.get('/about', (req, res) => {
    res.send('This is About Page');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('Contact us at anuja@email.com');
});

// POST route example
app.post('/data', (req, res) => {
    const data = req.body;
    res.send(`Received Data: ${JSON.stringify(data)}`);
});

// 404 route (for unknown paths)
app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
});

/* -------------------- START SERVER -------------------- */

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});