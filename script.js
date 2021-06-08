var quizprompt = document.querySelector("#quiz-prompt");
var startbtn = document.querySelector("#start-btn");
var quizcontent = document.querySelector("#quiz-content");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var quiztimer = document.querySelector("#quiztimer");
var scoredisplay = document.querySelector("#scoredisplay");
var timeleft = 75;
var score = 0;
var QuestionIndex = 0;
var OptionIndex = 0;
var AnswerIndex = -1;
var q;
var choicebtn;

var questionSet = ["What is a my favorite color?", "What is a my favorite Animal?", "What is 2 + 2?", "Who is the current president?"];
var CurrentQuestion = questionSet[0];

var correctAnswer = ["Pink", "Unicorn", "4", "Joe"];
var CurrentCorrectAnswer = correctAnswer[0];

var option = new Array ();
option[0] = new Array ("Pink", "Yellow", "Blue");
option[1] = new Array ("Unicorn", "Zebra", "Tiger");
option[2] = new Array ("1", "2", "4");
option[3] = new Array ("Larry", "Curly", "Joe");   

function scorebox() {
// window.prompt("Please enter your initals");
}

function startTimer() {
  var interval = setInterval(function() {
    timeleft--;
    quiztimer.textContent ="Seconds left: " + timeleft;
    if(timeleft === 0) {
      clearInterval(interval);
    } scorebox();  
  }, 1000);
}

function startquiz() {
  q = document.createElement("h3");
  q.innerHTML = questionSet[QuestionIndex];
  document.getElementById("question").append(q);
  
}


for (var h = 0; h < option[OptionIndex].length; h++) {
  var choicebtn = document.createElement("button");
  choicebtn.innerHTML = option[OptionIndex][h];
  choicebtn.setAttribute('value', option[OptionIndex][h]);
  document.getElementById("choices").append(choicebtn);
  
}

var buttoncounter = document.getElementsByTagName("button");


function changeoption() {
  var burrito = 0;
  for (var h = 0; h < option[OptionIndex].length; h++) {
    burrito++;
    buttoncounter[burrito].innerHTML = option[OptionIndex][h];
    document.getElementById("choices").append(choicebtn);
  }
  
}

function setScoreText() {
  scoredisplay.textContent = score;
}

function removeQuestion(){
  q.remove();
}


startbtn.addEventListener("click", function () {
  quizprompt.classList.add("hide");
  quizcontent.classList.remove("hide");
  startquiz();
  startTimer();
});

choices.addEventListener("click", function (e) {
  AnswerIndex++;
  var userAnswer = e.target.textContent;
  if(userAnswer === correctAnswer[AnswerIndex]) {
    score +=10;
    setScoreText();
  } else {
    score -=10;
    timeleft -=60;
    setScoreText();
  }
  OptionIndex++;
  QuestionIndex++;
  removeQuestion();
  changeoption();
  startquiz();
});


document.getElementById("scoredisplay").append("Score: " + score);

