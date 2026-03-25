// Auto-run when typing
const htmlInput = document.getElementById("htmlCode");
const cssInput = document.getElementById("cssCode");
const jsInput = document.getElementById("jsCode");

htmlInput.addEventListener("input", runCode);
cssInput.addEventListener("input", runCode);
jsInput.addEventListener("input", runCode);

function runCode() {
  const html = htmlInput.value;
  const css = "<style>" + cssInput.value + "</style>";
  const js = "<script>" + jsInput.value + "<\/script>";

  const output = document.getElementById("output");
  output.srcdoc = html + css + js;
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Download code as HTML file
function downloadCode() {
  const html = htmlInput.value;
  const css = "<style>" + cssInput.value + "</style>";
  const js = "<script>" + jsInput.value + "<\/script>";

  const fullCode = html + css + js;

  const blob = new Blob([fullCode], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "code.html";
  a.click();

  URL.revokeObjectURL(url);
}