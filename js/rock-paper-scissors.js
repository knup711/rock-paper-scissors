const choices = ['rock', 'paper', 'scissors'];

let ComputerChoice = getComputerChoice();

let PlayersChoice = getPlayersChoice();

//create the Computer choice

function getComputerChoice () {
    let ComputerChoice = choices[Math.floor(Math.random() * 3)];

    return ComputerChoice;

}

//create the Players choice

function getPlayersChoice () {
     let Playersprompt = prompt('Please choose rock, paper or scissors');

     let PlayersChoice = Playersprompt.toLowerCase();

     return PlayersChoice;
}


//compare Players choice with the computer choice and alert the winner

if (PlayersChoice == ComputerChoice) {
    alert("Undecided, " + PlayersChoice + " cant beat " + ComputerChoice + ", because it's the same.");
} else if (PlayersChoice == "rock" && ComputerChoice == "scissors") {
    alert("Congratulation, you won this round! " + PlayersChoice +" beats " + ComputerChoice + ".");
} else if (PlayersChoice == "rock" && ComputerChoice == "paper") {
    alert("Sorry you lost, " + ComputerChoice + " beats " + PlayersChoice + ".");
} else if (PlayersChoice == "paper" && ComputerChoice == "rock") {
    alert("Congratulation, you won this round! " + PlayersChoice +" beats " + ComputerChoice + ".");
} else if (PlayersChoice == "paper" && ComputerChoice == "scissors") {
    alert("Sorry you lost, " + ComputerChoice + " beats " + PlayersChoice + "."); 
} else if (PlayersChoice == "scissors" && ComputerChoice == "rock") {
    alert("Sorry you lost, " + ComputerChoice + " beats " + PlayersChoice + ".");
} else if (PlayersChoice == "scissors" && ComputerChoice == "paper") {
    alert("Congratulation, you won this round! " + PlayersChoice +" beats " + ComputerChoice + ".");
}
    






