const rockbtn = document.querySelector(".rock-btn")
const paperbtn = document.querySelector(".paper-btn")
const scissorsbtn = document.querySelector(".scissors-btn")
const userHand  = document.querySelector('.user.hand-icon')
const computerHand = document.querySelector('.computer.hand-icon')
const result = document.querySelector('.result')
const computerScore = document.querySelector('.computer-score')
const userScore = document.querySelector('.user-score')


const computerChoice = Math.floor(Math.random()*3);

const rockIcon = '✊'
const scissorsIcon = '✌️'
const paperIcon = '🤚'

const iconArray = [rockIcon,scissorsIcon,paperIcon]

//Rock
rockbtn.addEventListener('click', ()=>{
  calculateResult(rockIcon,scissorsIcon)
})
//Scissors
scissorsbtn.addEventListener('click',()=>{
  calculateResult(scissorsIcon,paperIcon)
});
//paper
paperbtn.addEventListener('click',()=>{
  calculateResult(paperIcon,rockIcon)
});


function calculateResult(selectedItem,winningIcon)
{
  result.innerText = ""
  userHand.innerText = "🤜";
computerHand.innerText = "🤛";
userHand.classList.add('shakeUserHands')
computerHand.classList.add('shakeComputerHands')

setTimeout(() => {
  userHand.classList.remove("shakeUserHands")
  computerHand.classList.remove("shakeComputerHands")
  userHand.innerText = selectedItem;
  computerHand.innerText = iconArray[computerChoice]
  if(userHand.innerText===computerHand.innerText)
  {
    result.innerText = 'Draw'
  }
  else if(computerHand.innerText==winningIcon)
  {
    result.innerText = 'You Won'
    userScore.innerText = +userScore.innerText+1 
  }
  else{
    result.innerText = 'Computer Won'
    computerScore.innerText = +computerScore.innerText+1
  }
},1000)
}
