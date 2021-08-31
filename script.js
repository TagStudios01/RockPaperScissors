let user_score=0;
let computer_Score=0;
const display_userscore=document.getElementById("Usescore");
const display_computerscore=document.getElementById("Computerscore");
const scoreboard=document.querySelector(".scoreboard")
const result_span=document.querySelector(".result");
let choice_rock=document.getElementById('Rock');
let choice_paper=document.getElementById("Paper");
const choice_scissors=document.getElementById("Scissors");

function getComputerchoice(){
  const choice=['Rock','Paper','Scissors'];
  const randomNumber= Math.floor(Math.random()*3);
  return choice[randomNumber];
}

function win(userscore,computerScore)
{
  user_score++;
  display_userscore.innerHTML=user_score;
  display_computerscore.innerHTML=computer_Score;
  result_span.innerHTML="You Win!";
}

function lose(userscore,computerScore)
{
  computer_Score++;
  display_computerscore.innerHTML=computer_Score;
  display_userscore.innerHTML=user_score;
  result_span.innerHTML="You Lose!";
}

function draw(userscore,computerScore)
{
  result_span.innerHTML="Its a Draw";
}

function game(userchoice,computerchoice)
{
  console.log(userchoice + computerchoice)
  switch(userchoice + computerchoice)
  {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win();
      break;

    case "ScissorsRock":
    case "RockPaper":
    case "PaperScissors":
      lose();    
      break;

    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw();
      break;

  }
}

function main()
{

choice_rock.addEventListener('click', function() { 
  game('Rock',getComputerchoice())
 },true);


choice_paper.addEventListener('click', function() { 
  game('Paper',getComputerchoice())
 },true);
 

choice_scissors.addEventListener('click', function() { 
  game('Scissors',getComputerchoice())
 },true);
}
main();