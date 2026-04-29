const express = require('express');
const app = express();

// Set EJS
app.set('view engine', 'ejs');

// Static files (CSS, JS)
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.render('index', { name: "Anuja" });
});

// Users route (dynamic data)
app.get('/user', (req, res) => {
    const user = ["Anuja", "Rahul", "Priya"];
    res.render('user', { user });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});