// this a decalation of variable
let userScore = 0;
let compScore = 0;
// Dom maniplation
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
// this is for a computer pick any one 
const genCompChoice = () => {
const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};
// this is for a draw gaem 
const drawGame = () => {
msg.innerText = "Game was Draw. Play again.";
msg.style.backgroundColor = "#081b31";
};
// this is for a show a winner on page
const showWinner = (userWin, userChoice, compChoice) => {
if (userWin) {
userScore++;
userScorePara.innerText = userScore;
msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor = "green";
} else {
compScore++;
compScorePara.innerText = compScore;
msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
msg.style.backgroundColor = "red";
}
};
// now this a main game it use a two value admin and computer campare and decliare a result on page
const playGame = (userChoice) => {
//Generate computer choice
const compChoice = genCompChoice();
if (userChoice === compChoice) {
//Draw Game
drawGame();
} else {
let userWin = true;
if (userChoice === "rock") {
//scissors, paper
userWin = compChoice === "paper" ? false : true;
} else if (userChoice === "paper") {
//rock, scissors
userWin = compChoice === "scissors" ? false : true;
} else {
//rock, paper
userWin = compChoice === "rock" ? false : true;
}
showWinner(userWin, userChoice, compChoice);
}
};
// and the last user input 
choices.forEach((choice) => {
choice.addEventListener("click", () => {
const userChoice = choice.getAttribute("id");
playGame(userChoice);
});
});