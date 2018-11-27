const rules = document.getElementById('rps-game-rules');
const btn = document.getElementById("rules-button");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    rules.style.display = "block";
}

span.onclick = function() {
    rules.style.display = "none";
}