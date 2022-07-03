// Points
var pointsTotal = 0;
var points = 20;

function addPoints () {
  pointsTotal+=points
};

function subtractPoints () {
  pointsTotal-=points
};
// Timer----------------------------------------------------------------------
var timerEl = document.getElementById('countdown');
var timeLeft = 60; 

var timeInterval = setInterval(function () {
     if (timeLeft > 1) {
     timerEl.textContent = 'Timer: ' + timeLeft;
     timeLeft--;
     } else {
     timerEl.textContent = '0';
     clearInterval(timeInterval);
     scoreboard ();
    }
}, 1000);
// Timer Penalty Function-------------------------------------------------------------
function timePenalty () {
    if (timeLeft > 1) {
    timerEl.textContent = 'Timer: ' + timeLeft;
    timeLeft-=5;
    } else {
    timerEl.textContent = '0';
    clearInterval(timeInterval);
    scoreboard ();
    }1000;
    return;
};
// timer end------------------------------------------------------------------------------------ 
//Populate form function---------------------------------------------------------------------
function populateQestion1 () {
    var questionOrder = ["Question 1"]
    var questionText = ["What does CSS stand for?"]
    var questionAnswers = ["Chart Style Sheet","Cascading Style Sheet","Computer Styling Styles","Continuing Silk Sheets"]
    // questionOrder.unshift("Question 2"), questionText.unshift("Question 2 bla bla bla"), questionAnswers.unshift("aa1","aa2","aa3","aa4");
    // Randomizing questions in the array
    let questionAnswersRandomized = questionAnswers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    var questionH1 = document.querySelector('h1');
    var questionP = document.querySelector("#p");
    var answerOne = document.querySelector("#answer1");
    var answerTwo = document.querySelector("#answer2");
    var answerThree = document.querySelector("#answer3");
    var answerFour = document.querySelector("#answer4");
     // Adds text from 1 entry of question array
    questionH1.innerText = questionOrder[0];
    // adds text 1 1st entry from question text array
    questionP.innerText = questionText[0];
    // adds answers 1-4
    answerOne.innerText= questionAnswersRandomized[0];
    answerTwo.innerText = questionAnswersRandomized[1];
    answerThree.innerText = questionAnswersRandomized[2];
    answerFour.innerText = questionAnswersRandomized[3];
  };
// // populate form function end----------------------------------------------------------------------
populateQestion1(); 
// // User input Function-----------------------------------------------------------------------------
function userInputQuestion1 () {
var answerKey = "Cascading Style Sheet"
var buttonOne = document.querySelector("#answer1");
var buttonTwo = document.querySelector("#answer2");
var buttonThree = document.querySelector("#answer3");
var buttonFour = document.querySelector("#answer4");
// BUTTON 1
// var buttonOne = document.querySelector("#answer2");
buttonOne.addEventListener("click", function(event) {
  event.preventDefault();
event.stopPropagation();
// ($(buttonTwo).text() will read it text value as text and will validate it against answer key
if ($(buttonOne).text() === answerKey) {
populateQuestion2 ();
userInputQuestion2 ();
addPoints ();

console.log(pointsTotal);
} else {
timePenalty ();
subtractPoints();
return;
}
});
console.log(buttonOne);
console.log(answerKey)
console.log(pointsTotal);


//  BUTTON 2
// var buttonTwo = document.querySelector("#answer2");
buttonTwo.addEventListener("click", function(event) {
  event.preventDefault();
  event.stopPropagation();
// ($(buttonTwo).text() will read it text value as text and will validate it against answer key
if ($(buttonTwo).text() === answerKey) {
populateQuestion2 ();
userInputQuestion2 ();
addPoints ();
console.log(pointsTotal);
return;
} else {
timePenalty ();
subtractPoints();
console.log(pointsTotal);
return;
}
});
//  BUTTON 3
// var buttonThree = document.querySelector("#answer3");
buttonThree.addEventListener("click", function(event) {
  event.preventDefault();
  event.stopPropagation();
// ($(buttonThree).text() will read it text value as text and will validate it against answer key
if ($(buttonThree).text() === answerKey) {
populateQuestion2 ();
userInputQuestion2 ();
addPoints ();
console.log(pointsTotal);
return;
} else {
timePenalty ();
subtractPoints();
console.log(pointsTotal);
return;
}
});
 //  BUTTON 4
// var buttonFour = document.querySelector("#answer4");
buttonFour.addEventListener("click", function(event) {
  event.preventDefault();
  event.stopPropagation();
// ($(buttonFour).text() will read it text value as text and will validate it against answer key
if ($(buttonFour).text() === answerKey) {
populateQuestion2 ();
userInputQuestion2 ();
addPoints ();
console.log(pointsTotal);
return;
} else {
timePenalty ();
subtractPoints();
console.log(pointsTotal);
return;
}
});return;
};
// User input Function end-----------------------------------------------------------------------------
userInputQuestion1 ();
// // QUESTION 2------------------------------------------------------------------------------------------
function populateQuestion2 () {
  var questionOrder = ["Question 2"]
  var questionText = ["What does var stand for?"]
  var questionAnswers = ["valuable","value","variable","varied"]
  // questionOrder.unshift("Question 2"), questionText.unshift("Question 2 bla bla bla"), questionAnswers.unshift("aa1","aa2","aa3","aa4");
  // Randomizing questions in the array
  let questionAnswersRandomized = questionAnswers
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  var questionH1 = document.querySelector('h1');
  var questionP = document.querySelector("#p");
  var answerOne = document.querySelector("#answer1");
  var answerTwo = document.querySelector("#answer2");
  var answerThree = document.querySelector("#answer3");
  var answerFour = document.querySelector("#answer4");
   // Adds text from 1 entry of question array
  questionH1.innerText = questionOrder[0];
  // adds text 1 1st entry from question text array
  questionP.innerText = questionText[0];
  // adds answers 1-4
  answerOne.innerText = questionAnswersRandomized[0];
  answerTwo.innerText = questionAnswersRandomized[1];
  answerThree.innerText = questionAnswersRandomized[2];
  answerFour.innerText = questionAnswersRandomized[3];
};
// INPUT2---------------------------------------------------------
function userInputQuestion2 () {
  var answerKey = "variable"
  // BUTTON 1
  var buttonOne = document.querySelector("#answer1");
  buttonOne.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonOne).text() will read it text value as text and will validate it against answer key
  if ($(buttonOne).text() === answerKey) {
  populateQuestion3 ();
  userInputQuestion3 ();
  addPoints ();
  console.log(pointsTotal);
  return;
  } else {
  timePenalty ();
  subtractPoints();
  console.log(pointsTotal);
  return;
  } 
  });
  console.log(buttonOne);
  console.log(answerKey);
  //  BUTTON 2
  var buttonTwo = document.querySelector("#answer2");
  buttonTwo.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonTwo).text() will read it text value as text and will validate it against answer key
  if ($(buttonTwo).text() === answerKey) {
  populateQuestion3 ();
  userInputQuestion3 ();
  addPoints ();
  console.log(pointsTotal);
  return;
  } else {
  timePenalty ();
  subtractPoints();
  console.log(pointsTotal);
  return;
  } 
  });
  //  BUTTON 3
  var buttonThree = document.querySelector("#answer3");
  buttonThree.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonThree).text() will read it text value as text and will validate it against answer key
  if ($(buttonThree).text() === answerKey) {
  populateQuestion3 ();
  userInputQuestion3 ();
  addPoints ();
  console.log(pointsTotal);
  return;
  } else {
  timePenalty ();
  subtractPoints();
  console.log(pointsTotal);
  return;
  } 
  });
   //  BUTTON 4
  var buttonFour = document.querySelector("#answer4");
  buttonFour.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonFour).text() will read it text value as text and will validate it against answer key
  if ($(buttonFour).text() === answerKey) {
  populateQuestion3 ();
  userInputQuestion3 ();
  addPoints ();
  console.log(pointsTotal);
  return;
  } else {
  timePenalty ();
  subtractPoints();
  console.log(pointsTotal);
  return;
  } 
  });return;
  };
// QUESTION 3-------------------------------------------------------------------------------------------
function populateQuestion3 () {
  var questionOrder = ["Question 3"]
  var questionText = ["What HTML are we currently using?"]
  var questionAnswers = ["HTML 11","HTML OSX","HTML 5","HTML III"]
  // questionOrder.unshift("Question 2"), questionText.unshift("Question 2 bla bla bla"), questionAnswers.unshift("aa1","aa2","aa3","aa4");
  // Randomizing questions in the array
  let questionAnswersRandomized = questionAnswers
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  var questionH1 = document.querySelector('h1');
  var questionP = document.querySelector("#p");
  var answerOne = document.querySelector("#answer1");
  var answerTwo = document.querySelector("#answer2");
  var answerThree = document.querySelector("#answer3");
  var answerFour = document.querySelector("#answer4");
   // Adds text from 1 entry of question array
  questionH1.innerText = questionOrder[0];
  // adds text 1 1st entry from question text array
  questionP.innerText = questionText[0];
  // adds answers 1-4
  answerOne.innerText = questionAnswersRandomized[0];
  answerTwo.innerText = questionAnswersRandomized[1];
  answerThree.innerText = questionAnswersRandomized[2];
  answerFour.innerText = questionAnswersRandomized[3];
};
// INPUT3---------------------------------------------------------
function userInputQuestion3 () {
  var answerKey = "HTML 5"
  // BUTTON 1
  var buttonOne = document.querySelector("#answer1");
  buttonOne.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonOne).text() will read it text value as text and will validate it against answer key
  if ($(buttonOne).text() === answerKey) {
  populateQuestion4 ();
  userInputQuestion4 ();
  addPoints ();
  } else {
  timePenalty ();
  subtractPoints();
  };
  });
  //  BUTTON 2
  var buttonTwo = document.querySelector("#answer2");
  buttonTwo.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonTwo).text() will read it text value as text and will validate it against answer key
  if ($(buttonTwo).text() === answerKey) {
  populateQuestion4 ();
  userInputQuestion4 ();
  addPoints ();
  } else {
  timePenalty ();
  subtractPoints();
  };
  });
  //  BUTTON 3
  var buttonThree = document.querySelector("#answer3");
  buttonThree.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonThree).text() will read it text value as text and will validate it against answer key
  if ($(buttonThree).text() === answerKey) {
  populateQuestion4 ();
  userInputQuestion4 ();
  addPoints ();
  } else {
  timePenalty ();
  subtractPoints();
  };
  });
   //  BUTTON 4
  var buttonFour = document.querySelector("#answer4");
  buttonFour.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonFour).text() will read it text value as text and will validate it against answer key
  if ($(buttonFour).text() === answerKey) {
  populateQuestion4 ();
  userInputQuestion4 ();
  addPoints ();
  } else {
  timePenalty ();
  subtractPoints();
  };
  });
  };
// QUESTION 4-------------------------------------------------------------------------------------------
function populateQuestion4 () {
  var questionOrder = ["Question 4"]
  var questionText = ["Which famous company created Bootstrap?"]
  var questionAnswers = ["Twitter","Google","Facebook","Tik-Tok"]
  // questionOrder.unshift("Question 2"), questionText.unshift("Question 2 bla bla bla"), questionAnswers.unshift("aa1","aa2","aa3","aa4");
  // Randomizing questions in the array
  let questionAnswersRandomized = questionAnswers
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  var questionH1 = document.querySelector('h1');
  var questionP = document.querySelector("#p");
  var answerOne = document.querySelector("#answer1");
  var answerTwo = document.querySelector("#answer2");
  var answerThree = document.querySelector("#answer3");
  var answerFour = document.querySelector("#answer4");
   // Adds text from 1 entry of question array
  questionH1.innerText = questionOrder[0];
  // adds text 1 1st entry from question text array
  questionP.innerText = questionText[0];
  // adds answers 1-4
  answerOne.innerText = questionAnswersRandomized[0];
  answerTwo.innerText = questionAnswersRandomized[1];
  answerThree.innerText = questionAnswersRandomized[2];
  answerFour.innerText = questionAnswersRandomized[3];
};
// INPUT4---------------------------------------------------------
function userInputQuestion4 () {
  var answerKey = ["Twitter"]
  // BUTTON 1
  var buttonOne = document.querySelector("#answer1");
  buttonOne.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonOne).text() will read it text value as text and will validate it against answer key
  if ($(buttonOne).text() === answerKey[0]) {
  populateQuestion5 ();
  userInputQuestion5 ();
  addPoints ();
  } else {
  timePenalty ();
  subtractPoints();
  };
  });
  //  BUTTON 2
  var buttonTwo = document.querySelector("#answer2");
  buttonTwo.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonTwo).text() will read it text value as text and will validate it against answer key
  if ($(buttonTwo).text() === answerKey[0]) {
  populateQuestion5 ();
  userInputQuestion5 ();
  addPoints ();
  } else {
  timePenalty ();
  subtractPoints();
  };
  });
  //  BUTTON 3
  var buttonThree = document.querySelector("#answer3");
  buttonThree.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonThree).text() will read it text value as text and will validate it against answer key
  if ($(buttonThree).text() === answerKey[0]) {
  populateQuestion5 ();
  userInputQuestion5 ();
  addPoints ();
  } else {
  timePenalty ();
  subtractPoints();
  };
  });
   //  BUTTON 4
  var buttonFour = document.querySelector("#answer4");
  buttonFour.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonFour).text() will read it text value as text and will validate it against answer key
  if ($(buttonFour).text() === answerKey[0]) {
  populateQuestion5 ();
  userInputQuestion5 ();
  addPoints ();
  } else {
  timePenalty ();
  subtractPoints();
  };
  });
  };
// QUESTION 5-------------------------------------------------------------------------------------------
function populateQuestion5 () {
  var questionOrder = ["Question 5"]
  var questionText = ["How do you identify an id selector?"]
  var questionAnswers = [".","@","$","#"]
  // questionOrder.unshift("Question 2"), questionText.unshift("Question 2 bla bla bla"), questionAnswers.unshift("aa1","aa2","aa3","aa4");
  // Randomizing questions in the array
  let questionAnswersRandomized = questionAnswers
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  var questionH1 = document.querySelector('h1');
  var questionP = document.querySelector("#p");
  var answerOne = document.querySelector("#answer1");
  var answerTwo = document.querySelector("#answer2");
  var answerThree = document.querySelector("#answer3");
  var answerFour = document.querySelector("#answer4");
   // Adds text from 1 entry of question array
  questionH1.innerText = questionOrder[0];
  // adds text 1 1st entry from question text array
  questionP.innerText = questionText[0];
  // adds answers 1-4
  answerOne.innerText = questionAnswersRandomized[0];
  answerTwo.innerText = questionAnswersRandomized[1];
  answerThree.innerText = questionAnswersRandomized[2];
  answerFour.innerText = questionAnswersRandomized[3];
};
// INPUT---------------------------------------------------------
function userInputQuestion5 () {
  var answerKey = ["#"]
  // BUTTON 1
  var buttonOne = document.querySelector("#answer1");
  buttonOne.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonOne).text() will read it text value as text and will validate it against answer key
  if ($(buttonOne).text() === answerKey[0]) {
  addPoints ();
  console.log(pointsTotal);
  localStorage.setItem("score", pointsTotal);
  scoreboard ();
  } else {
  timePenalty ();
  subtractPoints();
  alert("Wrong!");
  };
  });
  //  BUTTON 2
  var buttonTwo = document.querySelector("#answer2");
  buttonTwo.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonTwo).text() will read it text value as text and will validate it against answer key
  if ($(buttonTwo).text() === answerKey[0]) {
    alert("Correct!");
    addPoints ();
    console.log(pointsTotal);
    localStorage.setItem("score", pointsTotal);
    scoreboard ();
  } else {
  timePenalty ();
  subtractPoints();
  alert("Wrong!");
  };
  });
  //  BUTTON 3
  var buttonThree = document.querySelector("#answer3");
  buttonThree.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonThree).text() will read it text value as text and will validate it against answer key
  if ($(buttonThree).text() === answerKey[0]) {
    alert("Correct!");
    addPoints ();
    console.log(pointsTotal);
    localStorage.setItem("score", pointsTotal);
    scoreboard ();
  } else {
  timePenalty ();
  subtractPoints();
  alert("Wrong!");
  };
  });
   //  BUTTON 4
  var buttonFour = document.querySelector("#answer4");
  buttonFour.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  // ($(buttonFour).text() will read it text value as text and will validate it against answer key
  if ($(buttonFour).text() === answerKey[0]) {
    alert("Correct!");
    addPoints ();
    console.log(pointsTotal);
    localStorage.setItem("score", pointsTotal);
    scoreboard ();
  } else {
  timePenalty ();
  subtractPoints();
  alert("Wrong!");
  };
  });
  };
  // Questions end------------------------------------------------------------------------------------
  
  function scoreboard () {
    location.href = "./scoreboard.html";
  };


 