const choices = ['Rock', 'Paper', 'Scissors'];

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

     let PlayersChoice = Playersprompt.charAt(0).toUpperCase() + Playersprompt.slice(1).toLowerCase();

     return PlayersChoice;
}


//compare Players choice with the computer choice and alert the winner

if (PlayersChoice == ComputerChoice) {
    alert("Undecided, " + PlayersChoice + " cant beat " + ComputerChoice + ", because it's the same.");
} else if (PlayersChoice == "Rock" && ComputerChoice == "Scissors") {
    alert("Congratulation, you won this round! " + PlayersChoice +" beats " + ComputerChoice + ".");
} else if (PlayersChoice == "Rock" && ComputerChoice == "Paper") {
    alert("Sorry you lost, " + ComputerChoice + " beats " + PlayersChoice + ".");
} else if (PlayersChoice == "Paper" && ComputerChoice == "Rock") {
    alert("Congratulation, you won this round! " + PlayersChoice +" beats " + ComputerChoice + ".");
} else if (PlayersChoice == "Paper" && ComputerChoice == "Scissors") {
    alert("Sorry you lost, " + ComputerChoice + " beats " + PlayersChoice + "."); 
} else if (PlayersChoice == "Scissors" && ComputerChoice == "Rock") {
    alert("Sorry you lost, " + ComputerChoice + " beats " + PlayersChoice + ".");
} else if (PlayersChoice == "Scissors" && ComputerChoice == "Paper") {
    alert("Congratulation, you won this round! " + PlayersChoice +" beats " + ComputerChoice + ".");
}
    






