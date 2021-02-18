//Target button
var startQuiz = document.getElementById("startBtn");
var timeLeftel = document.getElementById("timeLeft");
startQuiz.addEventListener("click", function () {
  console.log("startQuiz"); // comment out later
  timer();
});

var timeLeft = 5;
var timer = setInterval(function () {
  if (timeLeft )// 
  timeLeftel.innerText = timeLeft; // updating html everytime time changes
  timeLeft--;

  console.log(timeLeft);
}, 1000);

var userSubmittedData = function (event) {
  event.preventDefault();
  // remove ".hide" class from the two page-break divs and the sections for wrokout and nutrition
  workoutContainer.classList.remove("hide");
  nutritionContainer.classList.remove("hide");
  btwnHeroWorkout.classList.remove("hide");
  btwnWorkoutNutrition.classList.remove("hide");
  var userInputFeet = feet.value;
  var userInputInches = inches.value;
  var name = firstName.value;

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

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    // Render the last registered email and password
    renderLastRegistered();
  }
};
