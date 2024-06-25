
const choice = ["rock","paper","scissor"];
const playerDisplay = document.getElementById("playerdisplay");
const computerDisplay = document.getElementById("computerdisplay");
const resultDisplay = document.getElementById("resultdisplay");

const PlayerScore = document.getElementById("Playerscore");
const ComputerScore = document.getElementById("computerscore");
let pScore= 0;
let cScore= 0;


function Playgame(playerChoice){

const comupterChoice = choice[Math.floor(Math.random() * 3)];
let result="";
if(playerChoice===comupterChoice)
{
    result= "Its a Tie!";
}
else{
    switch(playerChoice)
    {
     case "rock":
        result = (comupterChoice==="paper") ? "You Lose!" : "You Win!";
        break;
     case "paper":
        result = (comupterChoice==="scissor") ? "You Lose!" : "You Win!";
        break;
    case "scissor":
        result = (comupterChoice==="paper") ? "You Win!" : "You Lose!";
        break;
    }
    }

    playerDisplay.textContent=`Player : ${playerChoice}`;
    computerDisplay.textContent =`Computer : ${comupterChoice}`;
    resultDisplay.textContent=result;
    resultDisplay.classList.remove("green-text","red-text");
    switch(result){
        case "You Win!":
        resultDisplay.classList.add("green-text");
        PlayerScore.textContent=`Player Score: ${pScore}`;
        pScore++;

        break;
        case "You Lose!":
        resultDisplay.classList.add("red-text");
        ComputerScore.textContent=`Computer Score: ${cScore}`;
        cScore++;
        break;
    }
       
}


