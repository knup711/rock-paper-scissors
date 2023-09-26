const choices = ['Rock', 'Paper', 'Scissors'];

let playerWin = 0;

let computerWin = 0;

let roundCount = 0;

//create the Computer choice

function getComputerChoice () {
    let ComputerChoice = choices[Math.floor(Math.random() * 3)];

    return ComputerChoice;

}

//create the Players choice

function getPlayersChoice () {
     let Playersprompt = prompt('Please choose rock, paper or scissors');

     let PlayersChoice = Playersprompt.charAt(0).toUpperCase() + Playersprompt.slice(1).toLowerCase();

     return PlayersChoice;
}

//call the result

function result () {
    if (playerWin > computerWin) {
        console.log("Congratulations! You won the game!");
    } else if (playerWin < computerWin) {
        console.log("Sorry, you lost the game. Try again!");
    } else {
        console.log("Undecided, you both got the same points! Try again!");
    }
}


//compare Players choice with the computer choice and alert the winner


function playRound (PlayersChoice, ComputerChoice) {

    let win = "Congratulation, you won this round! " + PlayersChoice +" beats " + ComputerChoice + ".";
    let lost = "Sorry you lost, " + ComputerChoice + " beats " + PlayersChoice + ".";
    let undecided = "Undecided, " + PlayersChoice + " cant beat " + ComputerChoice + ", because it's the same.";

   if (PlayersChoice == ComputerChoice) {
    return console.log(undecided) + roundCount++ ;
} else if (PlayersChoice == "Rock" && ComputerChoice == "Scissors") {
    return console.log(win) + playerWin++ + roundCount++ ;
} else if (PlayersChoice == "Rock" && ComputerChoice == "Paper") {
    return console.log(lost) + computerWin++ + roundCount++ ;
} else if (PlayersChoice == "Paper" && ComputerChoice == "Rock") {
    return console.log(win) + playerWin++ + roundCount++ ;
} else if (PlayersChoice == "Paper" && ComputerChoice == "Scissors") {
    return console.log(lost) + computerWin++ + roundCount++ ; 
} else if (PlayersChoice == "Scissors" && ComputerChoice == "Rock") {
    return console.log(lost) + computerWin++ + roundCount++ ;
} else if (PlayersChoice == "Scissors" && ComputerChoice == "Paper") {
    return console.log(win) + playerWin++ + roundCount++ ;
} 
  //  return playerWin + computerWin + roundCount;
}

//creating a game with 5 rounds and then call the result

function game() {
for (i = 0; i <= 4; i++) {

    let ComputerChoice = getComputerChoice();
    let PlayersChoice = getPlayersChoice();

    playRound(PlayersChoice, ComputerChoice);

   // console.log(playerWin);
   // console.log(computerWin);
   //  console.log(roundCount;

}
    return result();
}

//starting the game

game();






