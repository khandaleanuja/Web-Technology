const express = require('express');
const app = express();
const port = 3000;


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
    res.send(`User Name : ${name}<br> Age : ${age}`);
});


// 404 route
app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});