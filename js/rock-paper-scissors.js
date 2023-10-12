const choices = ['Rock', 'Paper', 'Scissors'];

let playerWin = 0;
let computerWin = 0;
let roundCount = 0;
let remi = 0;
let playersChoice;
let computerChoice = getComputerChoice();

let resultbox = document.querySelector(".resultbox");
let content = document.createElement ("p");
let resulttext = document.createElement ("p");
let plrWin = document.querySelector(".plrWin");
plrWin.textContent = playerWin;
let playround = document.querySelector(".playround");
playround.textContent = roundCount;
let cmptrWin = document.querySelector(".cmptrWin");
cmptrWin.textContent = computerWin;
let remis = document.querySelector(".remis");
remis.textContent = remi;



//create the Computer choice

function getComputerChoice () {
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    return computerChoice;

}

//create the Players choice

function getPlayersChoice() {
let div = document.querySelector("div");

div.addEventListener("click", () => {
    let playersChoice = event.target.id;
    playRound(playersChoice, computerChoice);
});
    return;
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
    let undecided = "Undecided, " + playersChoice + " cant beat " + computerChoice + ", because it's the same.";
   if (playersChoice == computerChoice) {
    roundCount++;
    remi++;
    content.textContent = undecided;
    resultbox.appendChild(content);
    playround.textContent = roundCount;
    remis.textContent = remi;
} else if (playersChoice == "Rock" && computerChoice == "Scissors") {
    roundCount++
    playerWin++;
    content.textContent = win;
    resultbox.appendChild(content);
    playround.textContent = roundCount;
    plrWin.textContent = playerWin;
} else if (playersChoice == "Rock" && computerChoice == "Paper") {
    roundCount++;
    computerWin++;
    content.textContent = lost;
    resultbox.appendChild(content);
    playround.textContent = roundCount;
    cmptrWin.textContent = computerWin;
} else if (playersChoice == "Paper" && computerChoice == "Rock") {
    roundCount++;
    playerWin++;
    content.textContent = win;
    resultbox.appendChild(content);
    playround.textContent = roundCount;
    plrWin.textContent = playerWin;
} else if (playersChoice == "Paper" && computerChoice == "Scissors") {
    roundCount++;
    computerWin++;
    content.textContent = lost;
    resultbox.appendChild(content);
    playround.textContent = roundCount;
    cmptrWin.textContent = computerWin;
} else if (playersChoice == "Scissors" && computerChoice == "Rock") {
    roundCount++;
    computerWin++;
    content.textContent = lost;
    resultbox.appendChild(content);
    playround.textContent = roundCount;
    cmptrWin.textContent = computerWin;
} else if (playersChoice == "Scissors" && computerChoice == "Paper") {
    roundCount++;
    playerWin++;
    content.textContent = win;
    resultbox.appendChild(content);
    playround.textContent = roundCount;
    plrWin.textContent = playerWin;
}
    return;
};

for (i = 0; i < 5; i++) {
    getPlayersChoice();
};
