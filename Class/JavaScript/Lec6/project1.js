let button = document.getElementById("button");
let colorPicker = document.getElementById("colorPicker");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

button.onclick = function() {
    document.body.style.backgroundColor = getRandomColor();
}

colorPicker.onchange = function() {
    document.body.style.backgroundColor = colorPicker.value;
}