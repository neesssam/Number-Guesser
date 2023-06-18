let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let winner = "";
 
// Returns a random int between 0-9
const generateTarget = () => {
    let random = Math.floor(Math.random() * 10);
    return random;
  };

// Distance between the target and the user's/computer guess and the target.
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
  };
  
// Determines which guess is closest to the target number
const compareGuesses = (target, humanGuess, computerGuess) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert("Your guess is out of range. Please enter a number between 0 and 9.");
        return;
      }
    
      const humanDifference = getAbsoluteDistance(target, humanGuess);
      const computerDifference = getAbsoluteDistance(target, computerGuess);
    

    if (humanDifference === computerDifference) {
        winner = "tie";
        return winner;
      } else if (humanDifference < computerDifference) {
        winner = "human";
        return winner;
      } else {
        winner = "computer";
        return winner;
    }
};

// Increase winner score after each round
const updateScore = winner =>{
    if (winner === "human"){
        humanScore++;
    } else if (winner === "computer"){
        computerScore++;
    } else { 
        humanScore++;
        computerScore++;
    }
}

const advanceRound = () =>{
    currentRoundNumber++;
}
