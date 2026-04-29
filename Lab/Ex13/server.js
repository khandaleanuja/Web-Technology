const WebSocket = require("ws");

// Create WebSocket server
const wss = new WebSocket.Server({ port: 5000 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received:", message.toString());

    // Send message back to client
    ws.send("Server received: " + message);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on port 5000");