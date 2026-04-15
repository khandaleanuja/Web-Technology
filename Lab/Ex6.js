const express = require('express');
const app = express();
const port = 3000;



app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next(); 
});

app.use(express.json());


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
    res.send('Contact us at anuja@gmail.com');
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});