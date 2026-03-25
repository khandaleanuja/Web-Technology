const express = require('express')
const app = express()
const port = 3000

// function checkRoute(req, res, next) {
//     console.log(req.url);
//     next();
// }

// app.use(checkRoute);



// Advance middleware
app.use((req, res, next) => {
    console.log('Data Received, new date()');
})

app.get('/', (req, res) => {
  res.send('Welcome to home page')
})

app.get('/about', (req, res) => {
  const name = "Anuja";
  res.send(`Hello! I'm ${name}<br> Studying CSE-AIML at DKTE`);
})

app.get('/skills', (req, res) => {
  const skills = ["JS", "HTML", "CSS", "JAVA"];
  const result = skills.map(skill => skill.toUpperCase()).join(" | ");
  res.send(`Skills : ${result}`);
})

app.get('/contact', (req, res) => {
  const user = {
    email : "khandaleanuja@gmail.com",
    mobile : "1234567890"
  }

  const { email, mobile} = user;
  res.send(`Email : ${email} <br> Mobile : ${mobile}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




