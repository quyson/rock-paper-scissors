function computerChoice() {
    let choices = ['spear', 'sword', 'axe'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

const spearImage = document.querySelector('.spear');
const swordImage = document.querySelector('.sword');
const axeImage = document.querySelector('.axe');


spearImage.addEventListener('click', () => round('spear'));
swordImage.addEventListener('click', () => round('sword'));
axeImage.addEventListener('click', () => round('axe'));



function calculation(computerSelection, playerSelection,){
    if(computerSelection === 'sword' && playerSelection === 'axe'){
        return "Lose";
    } else if(computerSelection === 'spear' && playerSelection === 'sword'){
        return "Lose";
    } else if(computerSelection === 'axe' && playerSelection === 'spear'){
        return "Lose";
    }else if(computerSelection === 'sword' && playerSelection === 'spear'){
        return "Win";
    }else if(computerSelection === 'axe' && playerSelection === 'sword'){
        return "Win";
    }else if(computerSelection === 'spear' && playerSelection === 'axe'){
        return "Win";
    } else{
        return "Tie!";
    }
}

function update(result, playerSelection){
    if(result === 'Win'){
        let result = document.querySelector('.playerScore');
        let currentValue = result.textContent[14];
        result.textContent = "Player Score: " + (Number(currentValue) + 1);
    } else if(result === 'Lose'){
        let result = document.querySelector('.computerScore');
        let currentValue = result.textContent[16];
        result.textContent = "Computer Score: " + (Number(currentValue) + 1);
    } else {
        let result = document.querySelector('.tie');
        let currentValue = result.textContent[6];
        result.textContent = "Ties: " + (Number(currentValue) + 1);
    }

    let choiceDisplay = document.querySelector('.choice');
    choiceDisplay.textContent = "You Chose: " + playerSelection;

    let roundNumber = document.querySelector('.round');
    let currentValueRound = roundNumber.textContent[7];
    roundNumber.textContent = "Round: " + (Number(currentValueRound) + 1);
}

function round(elementClass){
    let computerSelection = computerChoice();
    let playerSelection = elementClass;
    let roundResult = calculation(computerSelection, playerSelection);
    update(roundResult, playerSelection);
}
