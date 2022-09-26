function getComputerChoice() {
    let computerChoices = ['scissors', 'rock', 'paper'];
    let choice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return choice
}

function gameRound(computerSelection, playerSelection,playerScore,computerScore){
    if(computerSelection === 'scissors' && playerSelection === 'paper'){
        return "You Lose! Scissors beats paper";
    } else if(computerSelection === 'rock' && playerSelection === 'scissors'){
        return "You Lose! Rock beats scissors!";
    } else if(computerSelection === 'paper' && playerSelection === 'rock'){
        return "You Lose! Paper beats rock!";
    }else if(computerSelection === 'scissors' && playerSelection === 'rock'){
        return "You Win! Rock beats scissors!";
    }else if(computerSelection === 'rock' && playerSelection === 'paper'){
        return "You Win! Paper beats rock!";
    }else if(computerSelection === 'paper' && playerSelection === 'scissors'){
        return "You Win! Scissors beats rock!";
    } else{
        return "Tie!";
    }
}

function player(){
    let playerChoice = prompt("Please pick either: rock, paper, or scissors").toLowerCase();

    while(playerChoice !== 'paper' && playerChoice !== 'scissors' && playerChoice !== 'rock'){
        playerChoice = prompt("Please pick either: rock, paper, or scissors").toLowerCase();
    }

    return playerChoice
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection;
    let playerChoice;
    let result;
    for(let i = 0;i < 5; i++){
        computerSelection = getComputerChoice();
        playerChoice = player(); 
        result = gameRound(computerSelection, playerChoice, playerScore, computerScore)
        console.log(result)
        if(result[4] === 'L'){
            computerScore ++;
        } else if(result[4 === 'W']){            
            playerScore ++;
        } 
    }
    if(playerScore > computerScore){
        console.log(playerScore + " | " + computerScore)
        console.log("You Win")
    } else {
        console.log(playerScore + " | " + computerScore)
        console.log("You Lose!")
    }
}

game();



