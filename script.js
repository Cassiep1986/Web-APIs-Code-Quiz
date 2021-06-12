var quizprompt = document.querySelector("#quiz-prompt");
var startbtn = document.querySelector("#start-btn");
var quizcontent = document.querySelector("#quiz-content");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var quiztimer = document.querySelector("#quiztimer");
var scoredisplay = document.querySelector("#scoredisplay");
var endscore = document.querySelector("#endscore");
var savebutton = document.querySelector("#save-button");
var Startover = document.querySelector("#Startover");
var HighScores = document.querySelector("#Highscores");
var myname = document.querySelector("#myname");
var myScore = document.querySelector("#myscore");
var scoresHere = document.querySelector("#scoresHere");
var timeleft = 10;
var score = 0;
var QuestionIndex = 0;
var OptionIndex = 0;
var AnswerIndex = -1;
var q;
var choicebtn;

var questionSet = [
  "Which of the following is not a boolean value?",
  "If a function was named burrito, how could I invoke it?",
  "Which of the following means strickly equal?",
  "Who is the inventor of Javascript?",
];
var CurrentQuestion = questionSet[0];

var correctAnswer = ["Zero", "burrito()", "" === ",", "Brendan Eich"];
var CurrentCorrectAnswer = correctAnswer[0];

var option = new Array();
option[0] = new Array("True", "False", "Zero", "True");
option[1] = new Array(
  "Function()",
  "Invoke.function",
  "functionburrito",
  "burrito()"
);
option[2] = new Array("&&", "=", "===", ">");
option[3] = new Array(
  "Brendan Eich",
  "James Gosling",
  "Tom from Myspace",
  "Mark Zuckerberg"
);

function startTimer() {
  var interval = setInterval(function () {
    timeleft--;
    quiztimer.textContent = "Seconds left: " + timeleft;
    if (timeleft < 1) {
      clearInterval(interval);
      scorebox();
      quizprompt.classList.add("hide");
      quizcontent.classList.add("hide");
      HighScores.classList.remove("hide");
    }
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
  choicebtn.setAttribute("value", option[OptionIndex][h]);
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

function removeQuestion() {
  q.remove();
}

function scorebox() {
  endscore.classList.remove("hide");
}

function endgame() {}

function displayscores() {
  var p = document.createElement("p");
  p.textContent = storedName;
  var storedName = localStorage.getItem("Name");
  document.getElementById("scoresHere").append(storedName);
  quizprompt.classList.add("hide");
  quizcontent.classList.add("hide");
  HighScores.classList.add("hide");
  endscore.classList.add("hide");
  scoresHere.classList.remove("hide");
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
  if (userAnswer === correctAnswer[AnswerIndex]) {
    score += 10;
    setScoreText();
  } else {
    timeleft -= 10;
    setScoreText();
  }
  OptionIndex++;
  QuestionIndex++;
  removeQuestion();
  changeoption();
  startquiz();
});

Startover.addEventListener("click", function () {
  location.reload();
});

savebutton.addEventListener("click", function () {
  var input = document.getElementById("bingo");
  localStorage.setItem("Name", input.value);
});

HighScores.addEventListener("click", function () {
  displayscores();
});

document.getElementById("scoredisplay").append("Score: " + score);
