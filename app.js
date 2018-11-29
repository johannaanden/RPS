let userScore = 0; 
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");

function getComputerOption() {
    const options = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function win(userOption, computerOption) {
    const userWord = "You picked ";
    const computerWord = " that computer picked";
    const userOption_div = document.getElementById(userOption);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `You win! 🏆 ${userWord} ${userOption} that beats ${computerOption}${computerWord}.`;
    userOption_div.classList.add('green-glow');
    setTimeout(() =>  userOption_div.classList.remove('green-glow'), 1000);
}

function lose(userOption, computerOption) {
    const userWord = "You picked ";
    const computerWord = " that computer picked";
    const userOption_div = document.getElementById(userOption);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You lost! 😭 ${userWord} ${userOption} that loses to ${computerOption}${computerWord}.`;
    userOption_div.classList.add('red-glow');
    setTimeout(() => userOption_div.classList.remove('red-glow'), 1000);
}

function draw(userOption) {
    const userOption_div = document.getElementById(userOption);
    result_p.innerHTML = "It's a draw! 🙀";
    userOption_div.classList.add('gray-glow');
    setTimeout(() => userOption_div.classList.remove('gray-glow'), 1000);
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