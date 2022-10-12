
const tools = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    let RandomNumber = Math.floor(Math.random() * 3);
    return tools[RandomNumber];
}

function getUserInput()
{

    let userInput = prompt("Enter Rock, Paper or Scissors");

    

    if (userInput.toLowerCase() === "rock" || userInput.toLowerCase() === "paper" || userInput.toLowerCase() === "scissors" )
    {
        return userInput.toLowerCase();
    }
    else
    {
        getUserInput();
    }


}



function playRound()
{
    

    let computerInput = getComputerChoice();
    let userInputs = getUserInput();


    if (userInputs === computerInput)
    {
        return "Draw"
    }

    if (
        userInputs === "rock" && computerInput === "scissors" ||
        userInputs === "paper" && computerInput === "rock" ||
        userInputs === "scissors" && computerInput === "paper" )
    {
        return "UserWins";
    }
    else
    {
        return "computerWins"
    }

}

function game()
{
    let userScore = 0;
    let computerScore = 0;
    let winning = '';
    
    for (i = 0; i < 5; i++)
    {
        let roundResult = playRound();
        let round = i + 1;
        

        if (roundResult === "UserWins")
        {
            userScore++;
        }
        if (roundResult === "computerWins")
        {
            computerScore++;
        }
   

        if (userScore < computerScore)
        {
            winning = "Your Loosing!";
        }
        else if (userScore > computerScore)
        {
            winning = "Your Winning!";
        }
        else
        {
            winning = "Its a draw";
        }

        if (i < 4)
        {
            alert("Round " + round +"\n"+"Result : " + roundResult + "\n" + winning);
        }
        else
        {
            if (userScore < computerScore)
            {
                alert("Round " + round +"\n"+"Result : " + roundResult + "\n" + "You Lost!");
            }
            else if (userScore > computerScore)
            {
                alert("Round " + round +"\n"+"Result : " + roundResult + "\n" + "You won!");
            }
            else
            {
                alert("Round " + round +"\n"+"Result : " + roundResult + "\n" + "Its A draw");
            }
        }
    }
}

game();

