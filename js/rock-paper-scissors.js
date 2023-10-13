// get necessary DOM nodes

const resultbox = document.querySelector(".resultbox");
const plrWin = document.querySelector(".plrWin");
const playround = document.querySelector(".playround");
const cmptrWin = document.querySelector(".cmptrWin");
const remis = document.querySelector(".remis");
const div = document.querySelector("div");

let content = document.createElement ("p");
let resulttext = document.createElement ("p");

const choices = ['Rock', 'Paper', 'Scissors'];

let playerWin = 0;
let computerWin = 0;
let roundCount = 0;
let remi = 0;
let playersChoice;
let playersSelect;
let computerChoice = getComputerChoice();

// show playrounds and score

plrWin.textContent = playerWin;
playround.textContent = roundCount;
cmptrWin.textContent = computerWin;
remis.textContent = remi;



//create the Computer choice

function getComputerChoice () {
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    return computerChoice;

};

//create the Players choice and start a playRound

function getPlayersChoice() {
    div.addEventListener("click", () => {
       playersChoice = event.target.id;
       console.log(playersChoice);
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        playRound(playersChoice, computerChoice);
        if (playerWin == 5 || computerWin == 5) {
            result();
        }
    })
};


//call the result

function result () {
    if (playerWin > computerWin) {
        resulttext.textContent = "Congratulations! You won the game!";
        resultbox.appendChild(resulttext);
    } else if (playerWin < computerWin) {
        resulttext.textContent = "Sorry, you lost the game. Try again!";
        resultbox.appendChild(resulttext);
    } else {
        resulttext.textContent = "Undecided, you both got the same points! Try again!";
        resultbox.appendChild(resulttext);
    }
}


//compare Players choice with the computer choice and alert the winner


function playRound (playersChoice, computerChoice) {

    let win = "Congratulation, you won this round! " + playersChoice +" beats " + computerChoice + ".";
    let lost = "Sorry you lost, " + computerChoice + " beats " + playersChoice + ".";
    let undecided = "Undecided, " + playersChoice + " can't beat " + computerChoice + ", because it's the same.";

   if (playersChoice == computerChoice) {
    roundCount++;
    remi++;
    content.textContent = undecided;
    resultbox.appendChild(content);
    playround.textContent = roundCount;
    remis.textContent = remi;
} else if ((playersChoice == "Rock" && computerChoice == "Scissors")    ||
            (playersChoice == "Paper" && computerChoice == "Rock")      ||
            (playersChoice == "Scissors" && computerChoice == "Paper")) {
    roundCount++;
    playerWin++;
    content.textContent = win;
    resultbox.appendChild(content);
    playround.textContent = roundCount;
    plrWin.textContent = playerWin;
} else if ((playersChoice == "Rock" && computerChoice == "Paper")        ||
            (playersChoice == "Paper" && computerChoice == "Scissors")   ||
            (playersChoice == "Scissors" && computerChoice == "Rock")) {
    roundCount++;
    computerWin++;
    content.textContent = lost;
    resultbox.appendChild(content);
    playround.textContent = roundCount;
    cmptrWin.textContent = computerWin;
}
};

function game() {
    getPlayersChoice();
    if (playerWin == 5 || computerWin == 5) {
        clearCounters();
       return result();
    }
};


function clearCounters() {
    let playerWin = 0;
    let computerWin = 0;
    let roundCount = 0;
    let remi = 0;

};

game();