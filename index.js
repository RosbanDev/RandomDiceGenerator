function generateTwoRandomNumbers(){
    // Generate random numbers from 1 to 6
    let firstNumber = Math.floor(Math.random() * 6) + 1;
    let secondNumber = Math.floor(Math.random() * 6) + 1;

    return [firstNumber, secondNumber];
}

const [firstNumber, secondNumber] = generateTwoRandomNumbers();
console.log(firstNumber, secondNumber);

var leftDice = "./images/dice"+firstNumber+".png";
var rightDice = "./images/dice"+secondNumber+".png";

document.querySelectorAll("img")[0].setAttribute("src", leftDice);
document.querySelectorAll("img")[1].setAttribute("src", rightDice);

if (firstNumber > secondNumber) {
    document.querySelector("h1").innerHTML = "🎲Player 1 Wins";
} else if (secondNumber > firstNumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins🎲";
} else{
    document.querySelector("h1").innerHTML = "No Winner";
}
