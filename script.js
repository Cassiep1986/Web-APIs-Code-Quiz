var quizprompt = document.querySelector("#quiz-prompt");
var startbtn = document.querySelector("#start-btn");
var quizcontent = document.querySelector("#quiz-content");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");

<<<<<<< HEAD
var question1 = {

=======
var question1 = [
    {
>>>>>>> parent of 8b93cdf (added questions/answers)
        text:"What is a my favorite color?",
        correctAnswer:"pink",
        options: ["Pink", "Yellow", "Blue"],
<<<<<<< HEAD
    }    

var question2 = {       
        text:"What is a my favorite Animal?",
        correctAnswer:"Unicorn",
        options: ["Unicorn", "Zebra", "Tiger"],
    }


    
function populatequestion1() {
    var q1 = document.createElement("h3");
    q1.innerHTML = question1.text;
    document.getElementById("question").append(q1);
}

for (var i = 0; i < question1.options.length; i++) {
 
function populatechoices(x) {
    var choicebtn = document.createElement("button");
    choicebtn.innerHTML = [x];
    document.getElementById("choices").append(choicebtn);
}}
=======
    },
];

>>>>>>> parent of 8b93cdf (added questions/answers)

startbtn.addEventListener("click", function (e) {
quizprompt.classList.add("hide");
quizcontent.classList.remove("hide")
})

<<<<<<< HEAD
    startbtn.addEventListener("click", function (e) {
        quizprompt.classList.add("hide");
        quizcontent.classList.remove("hide");
        populatequestion1()
        populatechoices(options)
    });
=======
>>>>>>> parent of 8b93cdf (added questions/answers)


