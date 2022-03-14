window.onload = init;
function init() {
    let image = document.getElementById("zero");
    image.onclick = showAnswer;
}

function showAnswer() {
    alert("Hi");
    let image = document.getElementById("zero");
    image.src = "zero.jpg";
}