const API_KEY = "YOUR_HUGGINGFACE_API_KEY";

async function summarizeText() {
  const input = document.getElementById("inputText").value.trim();
  const output = document.getElementById("outputText");
  const loader = document.getElementById("loader");

  if (!input) {
    alert("Please enter some text!");
    return;
  }

  loader.classList.remove("hidden");
  output.innerText = "";

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: input })
      }
    );

    const data = await response.json();

    if (data.error) {
      output.innerText = "Error: " + data.error;
    } else {
      output.innerText = data[0]?.summary_text || "No summary generated.";
    }

  } catch (error) {
    output.innerText = "Error: " + error.message;
  } finally {
    loader.classList.add("hidden");
  }
}

// Copy button
function copyText() {
  const text = document.getElementById("outputText").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard!");
}