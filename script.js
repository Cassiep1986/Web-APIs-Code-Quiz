var quizprompt = document.querySelector("#quiz-prompt");
var startbtn = document.querySelector("#start-btn");
var quizcontent = document.querySelector("#quiz-content");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");

var question1 = [
    {
        text:"What is a my favorite color?",
        correctAnswer:"Pink",
        options: ["Pink", "Yellow", "Blue"],
    },
];


startbtn.addEventListener("click", function (e) {
quizprompt.classList.add("hide");
quizcontent.classList.remove("hide")
})



