let userScore = 0; 
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");

function getComputerOption() {
    const options = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function game(userOption) {
    const computerOption = getComputerOption();
    switch (userOption + computerOption) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userOption, computerOption);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userOption, computerOption);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userOption, computerOption);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissor"));
}

main();