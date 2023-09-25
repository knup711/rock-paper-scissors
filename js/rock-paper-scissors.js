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

function playRound (PlayersChoice, ComputerChoice) {

    let win = "Congratulation, you won this round! " + PlayersChoice +" beats " + ComputerChoice + ".";
    let lost = "Sorry you lost, " + ComputerChoice + " beats " + PlayersChoice + ".";
    let undecided = "Undecided, " + PlayersChoice + " cant beat " + ComputerChoice + ", because it's the same.";

   if (PlayersChoice == ComputerChoice) {
    return alert(undecided);
} else if (PlayersChoice == "Rock" && ComputerChoice == "Scissors") {
    return alert(win);
} else if (PlayersChoice == "Rock" && ComputerChoice == "Paper") {
    return alert(lost);
} else if (PlayersChoice == "Paper" && ComputerChoice == "Rock") {
    return alert(win);
} else if (PlayersChoice == "Paper" && ComputerChoice == "Scissors") {
    return alert(lost); 
} else if (PlayersChoice == "Scissors" && ComputerChoice == "Rock") {
    return alert(lost);
} else if (PlayersChoice == "Scissors" && ComputerChoice == "Paper") {
    return alert(win);
}
}

 playRound(PlayersChoice, ComputerChoice);







