//Target button
var startQuiz = document.getElementById("startBtn");
var timeLeftEl = document.getElementById("timeLeft");
var timerEnd = document.getElementById("timerEnd");
var landingPage = document.getElementById("landingPage");
var questionsEl = document.getElementById("questions");

const questions = [
  {
    question: "How do you select an element based on its css class?",
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
    question: "Which option is NOT an example of a javascript loop ",
    option: ["for", "while", "and", "do/while"],
    answer: 2,
  },
];

// Creating timer where each questions is 15 seconds (array size *15)
var timeLeft = questions.length * 15;
var timeId = "";


// Need global index to move through questions array
var questionIndex = 0;




function startTimer() {
  timeId = setInterval(function () {
    timeLeftEl.textContent = timeLeft--;
    qAndA()
  }, 1000);
}

function qAndA(){
     questionsEl.innerHTML= `
     <h3>${questions[questionIndex].question}</h3>
     <ul>
       <li><button class = "optionBtn"> ${questions[questionIndex].option[0]}</button></li>
       <li><button class = "optionBtn">${questions[questionIndex].option[1]}</button></li>
       <li><button class = "optionBtn">${questions[questionIndex].option[2]}</button></li>
       <li><button class = "optionBtn">${questions[questionIndex].option[3]}</button></li>

     </ul>

     `
   var optionBtn = document.querySelectorAll(".optionBtn");
   for (let i = 0; i < optionBtn.length; i++) {
       optionBtn[i].addEventListener("click",function(){
               questionIndex++;
       });
     
   }
}

startQuiz.addEventListener("click", function () {
  console.log("startQuiz"); // comment out later'
  landingPage.classList.add("hide");
  questionsEl.classList.remove("hide");
  startTimer();
});

  // Want to stop at each page and increment with every click
  // i++ with each click
  //local storage through an array
  // Save email and password to localStorage using `setItem()`
  function renderLastRegistered() {
    // Retrieve the last email and password from localStorage using `getItem()`
    // NEED TO SAVE AN ARRAY OF HIGHSCORES
    // json.stringify array when setting item
    // json.parse it when getting item out
    var highscores = localStorage.getItem("highscores") || []; // if looking at highscores and doesnt exist -> set to an array
    var password = localStorage.getItem("password");

    var optionA = document.querySelector("#A");
    var optionB = document.querySelector("#B");
    var optionC = document.querySelector("#C");
    var optionD = document.querySelector("#D");

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    // Render the last registered email and password
    renderLastRegistered();
  }


  // Create end quiz
  // Create way to add initials
  // Stop clock at the end of a question
  // When clock stops, time reemaining is high score
  // show textbox to enter initials 
  // Time remaining goes into local storage as high score

