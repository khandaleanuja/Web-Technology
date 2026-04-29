const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");

// Add message to UI
function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// MAIN function 
async function sendMessage() {
  const userText = input.value;

  if (!userText) return;

  addMessage("You: " + userText, "user");
  input.value = "";

  addMessage("Typing...", "bot");

  try {
    const res = await fetch("/chat", {   
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userText })
    });

    const data = await res.json();

    chatBox.lastChild.remove(); // remove typing

    if (data.success) {
      addMessage("Bot: " + data.reply, "bot");
    } else {
      addMessage("Error: " + data.error, "bot");
    }

  } catch (err) {
    chatBox.lastChild.remove();
    addMessage("Server not reachable", "bot");
  }
}

// Enter key support
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});