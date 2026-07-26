// JavaScript code

let computerchoice;
let userpoints = 0;
let computerpoints = 0;
const choices = ["rock", "paper", "scissor"];
let winningScore = 5;

const points = document.getElementById("points");
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    winningScore = points.value;
    points.value = "";

})

const popup = document.querySelector(".popup")
const gamecontainer = document.querySelector(".gamecontainer")

const rockbutton = document.getElementById("rock");
rockbutton.addEventListener("click", () => {
    playGame("rock")
})

const paperbutton = document.getElementById("paper");
paperbutton.addEventListener("click", () => {
    playGame("paper")
})

const scissorbutton = document.getElementById("scissor");
scissorbutton.addEventListener("click", () => {
    playGame("scissor")
})

function playGame(userchoice) {
    if (userpoints >= winningScore || computerpoints >= winningScore) {
        return;
    }
    computerchoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("computer:", computerchoice)
    console.log("user:", userchoice);


    if (userchoice === computerchoice) {
        console.log("draw")
    }

    else if (userchoice === "rock" && computerchoice === "scissor") {
        userpoints++;
        console.log("user won")
    }

    else if (userchoice === "paper" && computerchoice === "rock") {
        userpoints++;
        console.log("user won")
    }

    else if (userchoice === "scissor" && computerchoice === "paper") {
        userpoints++;
        console.log("user won")
    }

    else {
        computerpoints++;
        console.log("computer won")
    }

    const userScore = document.getElementById("userscore")
    const computerScore = document.getElementById("computerscore")

    userScore.textContent = "user:" + userpoints;
    computerScore.textContent = "computer:" + computerpoints;


    const result = document.getElementById("result");
    if (userpoints >= winningScore) {
        result.textContent = "🎉 You Won!";
        popup.style.display = "flex";
        gamecontainer.classList.add("blur");
    }
    else if (computerpoints >= winningScore) {
        result.textContent = "🎉 Computer Won!";
        popup.style.display = "flex";
        gamecontainer.classList.add("blur");
    }
    const userDisplay = document.getElementById("userchoicedisplay")
    userDisplay.textContent = "user:" + userchoice;

    const computerDisplay = document.getElementById("computerchoicedisplay")
    computerDisplay.textContent = "computer:" + computerchoice;


}

const restartbutton = document.getElementById("restart");
restartbutton.addEventListener("click", () => {
    userpoints = 0;
    computerpoints = 0;

    const userScore = document.getElementById("userscore")
    userScore.textContent = "user:" + userpoints;

    const computerScore = document.getElementById("computerscore")
    computerScore.textContent = "computer:" + computerpoints;

    const result = document.getElementById("result");
    result.textContent = ""
    const computerDisplay = document.getElementById("computerchoicedisplay")
    const userDisplay = document.getElementById("userchoicedisplay")
    computerDisplay.textContent = "computer choice :";
    userDisplay.textContent = "user choice :";

    popup.style.display = "none";
    gamecontainer.classList.remove("blur");
})
