const totalScore = {computeScore: 0, playerScore: 0}


function getComputerChoice(){
   const rpsChoice = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return rpsChoice[randomChoice]
}

function getResult(playerChoice,computerChoice){
    let score = 0;
    if (playerChoice === computerChoice) {
        score = 0
      } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1
    
      } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        score = 1
    
      } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        score = 1
      } else {
        score = -1
      }
      return score
}

function showResult(score, playerChoice, computerChoice){
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    if (score == -1){
        resultDiv.innerHTML= "You loose!"

    }else if(score == 0){
        resultDiv.innerHTML="It's a draw!"

    }else{
        resultDiv.innerHTML="You win!"
    }
    handsDiv.innerText = `🧑${playerChoice} vs 💻 ${computerChoice}`;
    playerScoreDiv.innerText = `Score : ${totalScore['playerScore']}`
}

function onClickRPS (playerChoice){
    console.log({playerChoice});
    const computerChoice = getComputerChoice()
  console.log({computerChoice});
    const score = getResult(playerChoice,computerChoice);
    totalScore['playerScore'] += score;
    showResult(score,playerChoice,computerChoice)
    console.log({score});
    console.log({totalScore});
}
function playGame(){
    const rpsButtons = document.querySelectorAll('.rpsButton');
    console.log(rpsButtons);
    // rpsButtons[0].onclick = () => console.log(rpsButtons[0].value);
    rpsButtons.forEach(rpsButtons =>{
    rpsButtons.onclick = () => onClickRPS(rpsButtons.value)
    })  

const endGameButton = document.getElementById('endGameButton')
endGameButton.onclick = () => endGame(totalScore)
}

function endGame(totalScore){
    totalScore['playerScore'] = 0;
    totalScore['computerScore'] = 0;

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = '';
    handsDiv.innerText = ''
    playerScoreDiv.innerHTML = ''
}

 playGame();
