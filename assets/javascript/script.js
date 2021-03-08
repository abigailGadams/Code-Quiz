//Target button
var startQuiz = document.getElementById("startBtn");
var timeLeftEl = document.getElementById("timeLeft");
var timerEnd = document.getElementById("timerEnd");
var landingPage = document.getElementById("landingPage");
var questionsEl = document.getElementById("questions");
var endQuizEl = document.getElementById("endQuiz");
var highScore = localStorage.getItem("highScore")
  ? JSON.parse(localStorage.getItem("highScore"))
  : [];
// console.log(highScore);
var initialsEl = document.getElementById("initials");
var saveHighScoreEl = document.getElementById("save-highScore");
var highScoreEl = document.getElementById("highScore");

var goBackEl = document.getElementById("goBack");
var clearEl = document.getElementById("clear");

const questions = [
  {
    question: "How do you select an element based on its CSS class?",
    option: [
      "getElementById",
      "getElementByClass",
      "querySelector",
      "getElementByCss",
    ],
    answer: 2,
  },
  {
    question:
      "Which keyword allows you to assign a value, but does not allow value reassignment?",
    option: ["let", "get", "var", "const"],
    answer: 3,
  },
  {
    question: "How do you declare a string data type?",
    option: ["quotes", "without quotes", "square bracket", "curly brackets"],
    answer: 0,
  },
  {
    question: "Which option is NOT an example of a JavaScript loop ",
    option: ["for", "while", "and", "do/while"],
    answer: 2,
  },
  {
    question: "In HTML, what tags are used to insert JavaScript?",
    option: ["link", "script", "src", "alt"],
    answer: 1,
  },
];

// Creating timer where each questions is 15 seconds (array size *15)
var timeLeft = questions.length * 10;
var timeId = "";

// Need global index to move through questions array
var questionIndex = 0;

function startTimer() {
  timeId = setInterval(function () {
    timeLeftEl.textContent = "Time Remaining:  " + timeLeft--;
    if (questionIndex >= questions.length) {
      clearInterval(timeId);
      questionsEl.classList.add("hide");
      endQuizEl.classList.remove("hide");
    } else if (timeLeft == 0 | timeLeft <= 0) {
      clearInterval(timeId);
      questionsEl.classList.add("hide");
      endQuizEl.classList.remove("hide");
      timeLeftEl.classList.add("hide");
    }
    else {
      qAndA();
    }
  }, 1000);
}

function qAndA() {
  questionsEl.innerHTML = `
     <h3>${questions[questionIndex].question}</h3>
     <ul class = "answers" >
       <button class = "optionBtn"> ${questions[questionIndex].option[0]}</button>
       <button class = "optionBtn">${questions[questionIndex].option[1]}</button>
       <button class = "optionBtn">${questions[questionIndex].option[2]}</button>
       <button class = "optionBtn">${questions[questionIndex].option[3]}</button>

     </ul>

     `;
  var optionBtn = document.querySelectorAll(".optionBtn");
  for (let i = 0; i < optionBtn.length; i++) {
    optionBtn[i].addEventListener("click", function () {
      let text = this.textContent;
      let correctIndex = questions[questionIndex].answer;
      let correctAnswer = questions[questionIndex].option[correctIndex];
      console.log(text, correctAnswer);
      if (text != correctAnswer) {
        alert("Sorry, wrong answer!");
        timeLeft = timeLeft - 5;
      }

      questionIndex++;
    });
  }
}

startQuiz.addEventListener("click", function () {
  landingPage.classList.add("hide");
  questionsEl.classList.remove("hide");
  startTimer();
});

saveHighScoreEl.addEventListener("click", function () {
  let initials = initialsEl.value;
  highScore.push({ initials: initials, highScore: timeLeft });
  localStorage.setItem("highScore", JSON.stringify(highScore));
  highScoreEl.classList.remove("hide");
  endQuizEl.classList.add("hide");
  timeLeftEl.classList.add("hide");

  for (let i = 0; i < highScore.length; i++) {
    var p = document.createElement("p");
    p.textContent =
      highScore[i].highScore + " seconds ~ " + highScore[i].initials;
    highScoreEl.append(p);
    // document.getElementById("demo").innerHTML = highScore["0:i"];
  }
});

goBackEl.addEventListener("click", function () {
  location.reload();
});

clearEl.addEventListener("click", function () {
  localStorage.clear();
});

// Create end quiz
endQuiz.addEventListener("click", function () {});

// Stop clock at the end of a question
