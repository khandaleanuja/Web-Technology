const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Fake API using Promise
function fakeAPI(userMessage) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Server Error! Try again.");
      } else {
        resolve(getBotReply(userMessage));
      }
    }, 1500);
  });
}

// Bot logic
function getBotReply(msg) {
  msg = msg.toLowerCase();

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  if (msg.includes("hi") || msg.includes("hello")) {
    return random([
      "Heyy! 😊 How’s your day going?",
      "Hello 👋 what’s up?"
    ]);
  }

  if (msg.includes("how are you")) {
    return random([
      "I’m doing great 😄 what about you?",
      "All good here!"
    ]);
  }

  if (msg.includes("bye")) {
    return "Bye 👋 take care!";
  }

  return random([
    "Ohhh really? 👀 tell me more!",
    "Nicee 😎",
    "Haha 😂 sounds fun!"
  ]);
}

// API route
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const reply = await fakeAPI(message);

    res.json({
      success: true,
      reply: reply
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error
    });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});