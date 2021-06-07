var quizprompt = document.querySelector("#quiz-prompt");
var startbtn = document.querySelector("#start-btn");
var quizcontent = document.querySelector("#quiz-content");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var quiztimer = document.querySelector("#quiztimer");
var choice2 = document.querySelector("#choices2")
var scoredisplay = document.querySelector("#scoredisplay")
var timeleft = 75;
var score = 0;

var question1 = {
    text: "What is a my favorite color?",
    correctAnswer: "Pink",
    options: ["Pink", "Yellow", "Blue"],
};

var question2 = {
  text: "What is a my favorite Animal?",
  correctAnswer: "Unicorn",
  options: ["Unicorn", "Zebra", "Tiger"],
};

var question3 = {
  text: "What color is the sky?",
  correctAnswer: "Blue",
  options: ["Green", "Blue", "Banana"],
};

var question4 = {
  text: "Question 4?",
  correctAnswer: "Right",
  options: ["Wrong", "Wrong", "Right"],
};

var question5 = {
  text: "Question 5?",
  correctAnswer: "Right",
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

function startquiz() {
  var q = document.createElement("h3");
  q.innerHTML = question1.text;
  document.getElementById("question").append(q);
  
}

for (var i = 0; i < question1.options.length; i++) {
  var choicebtn = document.createElement("button");
  choicebtn.innerHTML = question1.options[i];
  document.getElementById("choices").append(choicebtn);
  
}

function setScoreText() {
  scoredisplay.textContent = score;
}

startbtn.addEventListener("click", function () {
  quizprompt.classList.add("hide");
  quizcontent.classList.remove("hide");
  // choices2.classList.add("hide");
  startquiz();
  startTimer();
});

choices.addEventListener("click", function (e) {
  var target = e.target;
  (question1.text).splice(0)
  console.log(question2.text)
  if(target.textContent === question1.correctAnswer) {
    score +=10;
    setScoreText();
    
    
    
    // var newQuestion = question1.replace("hola!");
  }
  
  
  
});

document.getElementById("scoredisplay").append("Score: " + score);

// if (target.matches("button")) {
// }



// function populatequestion2() {
  //   var q2 = document.createElement("h3");
  //   q2.innerHTML = question2.text;
  //   document.getElementById("question").append(q2);
  // }
  
  // function populatechoices2(x) {
    //   var choicebtn2 = document.createElement("button");
    //   choicebtn2.innerHTML = x;
//   document.getElementById("choices2").append(choicebtn2);
// }