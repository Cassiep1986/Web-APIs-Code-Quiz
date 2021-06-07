var quizprompt = document.querySelector("#quiz-prompt");
var startbtn = document.querySelector("#start-btn");
var quizcontent = document.querySelector("#quiz-content");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var quiztimer = document.querySelector("#quiztimer");
var timeleft = 75;
var choice2 = document.querySelector("#choices2")

var question1 = {
    text: "What is a my favorite color?",
    correctAnswer: 1,
    options: ["Pink", "Yellow", "Blue"],
};

var question2 = {
  text: "What is a my favorite Animal?",
  correctAnswer: 0,
  options: ["Unicorn", "Zebra", "Tiger"],
};

var question3 = {
  text: "What color is the sky?",
  correctAnswer: 1,
  options: ["Green", "Blue", "Banana"],
};

var question4 = {
  text: "Question 4?",
  correctAnswer: 2,
  options: ["Wrong", "Wrong", "Right"],
};

var question5 = {
  text: "Question 5?",
  correctAnswer: 2,
  options: ["Wrong", "Wrong", "Right"],
};

function startTimer() {
  var interval = setInterval(function() {
    timeleft--;
    quiztimer.textContent ="Seconds left: " + timeleft;
    if(timeleft === 0) {
      // Stops execution of action at set interval
      clearInterval(interval);
      // Calls function to create and append image
      sendMessage();
    }
    
  }, 1000);
}

function populatequestion1() {
  var q1 = document.createElement("h3");
  q1.innerHTML = question1.text;
  document.getElementById("question").append(q1);
}

function populatechoices(x) {
  var choicebtn = document.createElement("button");
  choicebtn.innerHTML = x;
  document.getElementById("choices").append(choicebtn);
}

for (var i = 0; i < question1.options.length; i++) {
  populatechoices(question1.options[i]);
}

function populatequestion2() {
  var q2 = document.createElement("h3");
  q2.innerHTML = question2.text;
  document.getElementById("question").append(q2);
}

function populatechoices2(x) {
  var choicebtn2 = document.createElement("button");
  choicebtn2.innerHTML = x;
  document.getElementById("choices2").append(choicebtn2);
}

for (var i = 0; i < question2.options.length; i++) {
  populatechoices2(question2.options[i]);
}

startbtn.addEventListener("click", function () {
  quizprompt.classList.add("hide");
  quizcontent.classList.remove("hide");
  choices2.classList.add("hide");
  populatequestion1();
  startTimer();
});


choices.children[1].addEventListener("click", function bond() {
  choices.classList.add("hide");
  choice2.classList.remove("hide");
});

choices2.children[0].addEventListener("click", function () {
  console.log("what");
});
