const choices = ['rock', 'paper', 'scissors'];

const ComputerChoice = getComputerChoice();

//create the Computerchoice

console.log(choices);

function getComputerChoice () {
    let ComputerChoice = choices[Math.floor(Math.random() * 3)];

    return ComputerChoice;


}

console.log (ComputerChoice);
