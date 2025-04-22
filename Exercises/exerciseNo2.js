function getComputerChoice() {
    const choices = ['snake', 'water', 'gun'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((userChoice === 'snake' && computerChoice === 'water') ||
        (userChoice === 'water' && computerChoice === 'gun') ||
        (userChoice === 'gun' && computerChoice === 'snake')) {
        return "You win!";
    }
    return "Computer wins!";
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById('result').innerText = `You chose: ${userChoice}\nComputer chose: ${computerChoice}\n${result}`;
}

// Remove the prompt-based user choice and console logs
// const userChoice = prompt("Choose snake, water, or gun:").toLowerCase();
// const computerChoice = getComputerChoice();
// console.log("You chose:", userChoice);
// console.log("Computer chose:", computerChoice);
// console.log(determineWinner(userChoice, computerChoice));