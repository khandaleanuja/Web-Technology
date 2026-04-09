const express = require('express');

const app = express();

const PORT = 3000;

/* -------------------- ROUTES -------------------- */

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

// Dynamic route with one parameter
app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

// Dynamic route with multiple parameters
app.get('/user/:name/age/:age', (req, res) => {
    const name = req.params.name;
    const age = req.params.age;
    res.send(`User Name: ${name}, Age: ${age}`);
});

// Product route example
app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Product ID: ${productId}`);
});

// 404 route
app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
});

/* -------------------- START SERVER -------------------- */

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});