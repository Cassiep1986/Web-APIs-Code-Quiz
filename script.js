var quizprompt = document.querySelector("#quiz-prompt");
var startbtn = document.querySelector("#start-btn");
var quizcontent = document.querySelector("#quiz-content");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var timer = document.getElementById("time");
var maxquestions = 5;


var questionSet = [ {

        text:"What is a my favorite color?",
        correctAnswer:0,
        options: ["Pink", "Yellow", "Blue"],
    },

{
        text:"What is a my favorite Animal?",
        correctAnswer:"Unicorn",
        options: ["Unicorn", "Zebra", "Tiger"],
    },

{
    
        text:"What color is the sky?",
        correctAnswer:"Blue",
        options: ["Green", "Blue", "Banana"],
    },

{
    
        text:"Question 4?",
        correctAnswer:"Right",
        options: ["Wrong", "Wrong", "Right"],
    },

{
    
        text:"Question 5?",
        correctAnswer:"Right",
        options: ["Wrong", "Wrong", "Right"],
    } ]

function quiztimer(){
    var timeleft = 75;
    var timeinterval = setInterval(function(){
        if (timeleft > 1) { 
            timer.textContent = timeleft;
            timeleft--;       
        } else {
            clearInterval(timeinterval);
        }
     },1000);
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
    populatechoices(question1.options[i]) 
    
}

function populatequestion2() {
    var q2 = document.createElement("h3");
    q2.innerHTML = question2.text;
    document.getElementById("question").append(q2);
}



populatequestion1()

startbtn.addEventListener("click", function (e) {
    quizprompt.classList.add("hide");
    quizcontent.classList.remove("hide");
});

choices.addEventListener("click", function (e) {
if (e.target.matches("Pink")); {
}
});