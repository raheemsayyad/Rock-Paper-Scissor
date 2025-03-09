let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");
//computer random choice
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];

};

const drawGame= () =>{
    msg.innerText = "Draw Play Again.."; 
    msg.style.backgroundColor ="red";
    msg.style.backgroundColor ="orange";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else {
        compScore++;
        CompScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";

    }
};

//game logic
const playGame = (userChoice) => {
    console.log("user choice=",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

if(userChoice==compChoice){
    drawGame();   
} else {
   let userWin = true;
   if(userChoice === "rock"){
      //scissor,paper
    userWin = compChoice === 'paper'?false : true;
   }else if(userChoice==="paper"){
      //rock,scissor
    userWin = compChoice === "scissors" ? false : true;

   }else{
    //rock,paper
    userWin = compChoice ==="rock" ? false : true;
   };

showWinner(userWin,userChoice,compChoice);

}  

}

//user choice
choices.forEach((choice) => { 
    choice.addEventListener('click',()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice)

    })
})

let modeBtn = document.querySelector('#mode');
let curMode = "dark"
let body = document.querySelector("body")
modeBtn.addEventListener("click",()=>{
   if(curMode=="dark"){
    curMode="light"
    body.classList.add("dark")
    body.classList.remove("light")

   }
   else{
   curMode="dark"
   body.classList.add("light")
   body.classList.remove("dark")
   }
console.log(curMode)
});
