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
    }1000;
    return;
};
// timer end------------------------------------------------------------------------------------ 
//Populate form function---------------------------------------------------------------------
function populateQestion1 () {
    var questionOrder = ["Question 1"]
    var questionText = ["Question 1 bla bla bla"]
    var questionAnswers = ["a1","a2","a3","a4"]
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
    return;
  };
// // populate form function end----------------------------------------------------------------------
populateQestion1();
// // User input Function-----------------------------------------------------------------------------
function userInputQuestion1 () {
var answerKey = "a1"
// BUTTON 1
var buttonOne = document.querySelector("#answer1");
buttonOne.addEventListener("click", function() {
// ($(buttonOne).text() will read it text value as text and will validate it against answer key
if ($(buttonOne).text() === answerKey) {
populateQuestion2 ();
} else if ($(buttonOne).text() !== answerKey) {
timePenalty ();
}
});
console.log(buttonOne);
console.log(answerKey);
//  BUTTON 2
var buttonTwo = document.querySelector("#answer2");
buttonTwo.addEventListener("click", function() {
// ($(buttonTwo).text() will read it text value as text and will validate it against answer key
if ($(buttonTwo).text() === answerKey) {
populateQuestion2 ();
} else if ($(buttonTwo).text() !== answerKey) {
timePenalty ();
}
});
//  BUTTON 3
var buttonThree = document.querySelector("#answer3");
buttonThree.addEventListener("click", function() {
// ($(buttonThree).text() will read it text value as text and will validate it against answer key
if ($(buttonThree).text() === answerKey) {
populateQuestion2 ();
} else if ($(buttonThree).text() !== answerKey) {
timePenalty ();
}
});
 //  BUTTON 4
var buttonFour = document.querySelector("#answer4");
buttonFour.addEventListener("click", function() {
// ($(buttonFour).text() will read it text value as text and will validate it against answer key
if ($(buttonFour).text() === answerKey) {
populateQuestion2 ();
} else if ($(buttonFour).text() !== answerKey) {
timePenalty ();
}
}); return;
};
// User input Function end-----------------------------------------------------------------------------
userInputQuestion1 ();
// QUESTION 2------------------------------------------------------------------------------------------
function populateQuestion2 () {
  var questionOrder = ["Question 2"]
  var questionText = ["Question 2 bla bla bla"]
  var questionAnswers = ["aa1","aa2","aa3","aa4"]
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
  return;
};
// INPUT---------------------------------------------------------
function userInputQuestion2 () {
  var answerKey = "aa1"
  // BUTTON 1
  var buttonOne = document.querySelector("#answer1");
  buttonOne.addEventListener("click", function() {
  // ($(buttonOne).text() will read it text value as text and will validate it against answer key
  if ($(buttonOne).text() === answerKey) {
  populateQuestion3 ();
  } else if ($(buttonOne).text() !== answerKey) {
  timePenalty ();
  }
  });
  console.log(buttonOne);
  console.log(answerKey);
  //  BUTTON 2
  var buttonTwo = document.querySelector("#answer2");
  buttonTwo.addEventListener("click", function() {
  // ($(buttonTwo).text() will read it text value as text and will validate it against answer key
  if ($(buttonTwo).text() === answerKey) {
  populateQuestion3 ();
  } else if ($(buttonTwo).text() !== answerKey) {
  timePenalty ();
  }
  });
  //  BUTTON 3
  var buttonThree = document.querySelector("#answer3");
  buttonThree.addEventListener("click", function() {
  // ($(buttonThree).text() will read it text value as text and will validate it against answer key
  if ($(buttonThree).text() === answerKey) {
  populateQuestion3 ();
  } else if ($(buttonThree).text() !== answerKey) {
  timePenalty ();
  }
  });
   //  BUTTON 4
  var buttonFour = document.querySelector("#answer4");
  buttonFour.addEventListener("click", function() {
  // ($(buttonFour).text() will read it text value as text and will validate it against answer key
  if ($(buttonFour).text() === answerKey) {
  populateQuestion3 ();
  } else if ($(buttonFour).text() !== answerKey) {
  timePenalty ();
  }
  }); return;
  };

  userInputQuestion2 ();
// // QUESTION 3-------------------------------------------------------------------------------------------
// function populateQuestion3 () {
//   var questionOrder = ["Question 3"]
//   var questionText = ["Question 3 bla bla bla"]
//   var questionAnswers = ["aaa1","aaa2","aaa3","aaa4"]
//   // questionOrder.unshift("Question 2"), questionText.unshift("Question 2 bla bla bla"), questionAnswers.unshift("aa1","aa2","aa3","aa4");
//   // Randomizing questions in the array
//   let questionAnswersRandomized = questionAnswers
//   .map(value => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value)

//   var questionH1 = document.querySelector('h1');
//   var questionP = document.querySelector("#p");
//   var answerOne = document.querySelector("#answer1");
//   var answerTwo = document.querySelector("#answer2");
//   var answerThree = document.querySelector("#answer3");
//   var answerFour = document.querySelector("#answer4");
//    // Adds text from 1 entry of question array
//   questionH1.innerText = questionOrder[0];
//   // adds text 1 1st entry from question text array
//   questionP.innerText = questionText[0];
//   // adds answers 1-4
//   answerOne.innerText = questionAnswersRandomized[0];
//   answerTwo.innerText = questionAnswersRandomized[1];
//   answerThree.innerText = questionAnswersRandomized[2];
//   answerFour.innerText = questionAnswersRandomized[3];
// };
// // INPUT---------------------------------------------------------
// function userInputQuestion3 () {
//   var answerKey = ["aaa1"]
//   // BUTTON 1
//   var buttonOne = document.querySelector("#answer1");
//   buttonOne.addEventListener("click", function() {
//   // ($(buttonOne).text() will read it text value as text and will validate it against answer key
//   if ($(buttonOne).text() === answerKey[0]) {
//   populateQuestion4 ();
//   } else {
//   timePenalty ();
//   };
//   });
//   //  BUTTON 2
//   var buttonTwo = document.querySelector("#answer2");
//   buttonTwo.addEventListener("click", function() {
//   // ($(buttonTwo).text() will read it text value as text and will validate it against answer key
//   if ($(buttonTwo).text() === answerKey[0]) {
//   populateQuestion4 ();
//   } else {
//   timePenalty ();
//   };
//   });
//   //  BUTTON 3
//   var buttonThree = document.querySelector("#answer3");
//   buttonThree.addEventListener("click", function() {
//   // ($(buttonThree).text() will read it text value as text and will validate it against answer key
//   if ($(buttonThree).text() === answerKey[0]) {
//   populateQuestion4 ();
//   } else {
//   timePenalty ();
//   };
//   });
//    //  BUTTON 4
//   var buttonFour = document.querySelector("#answer4");
//   buttonFour.addEventListener("click", function() {
//   // ($(buttonFour).text() will read it text value as text and will validate it against answer key
//   if ($(buttonFour).text() === answerKey[0]) {
//   populateQuestion4 ();
//   } else {
//   timePenalty ();
//   };
//   });
//   };

//   userInputQuestion3 ();
// // QUESTION 4-------------------------------------------------------------------------------------------
// function populateQuestion4 () {
//   var questionOrder = ["Question 4"]
//   var questionText = ["Question 4 bla bla bla"]
//   var questionAnswers = ["aaaa1","aaaa2","aaaa3","aaaa4"]
//   // questionOrder.unshift("Question 2"), questionText.unshift("Question 2 bla bla bla"), questionAnswers.unshift("aa1","aa2","aa3","aa4");
//   // Randomizing questions in the array
//   let questionAnswersRandomized = questionAnswers
//   .map(value => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value)

//   var questionH1 = document.querySelector('h1');
//   var questionP = document.querySelector("#p");
//   var answerOne = document.querySelector("#answer1");
//   var answerTwo = document.querySelector("#answer2");
//   var answerThree = document.querySelector("#answer3");
//   var answerFour = document.querySelector("#answer4");
//    // Adds text from 1 entry of question array
//   questionH1.innerText = questionOrder[0];
//   // adds text 1 1st entry from question text array
//   questionP.innerText = questionText[0];
//   // adds answers 1-4
//   answerOne.innerText = questionAnswersRandomized[0];
//   answerTwo.innerText = questionAnswersRandomized[1];
//   answerThree.innerText = questionAnswersRandomized[2];
//   answerFour.innerText = questionAnswersRandomized[3];
// };
// // INPUT---------------------------------------------------------
// function userInputQuestion4 () {
//   var answerKey = ["aaaa1"]
//   // BUTTON 1
//   var buttonOne = document.querySelector("#answer1");
//   buttonOne.addEventListener("click", function() {
//   // ($(buttonOne).text() will read it text value as text and will validate it against answer key
//   if ($(buttonOne).text() === answerKey[0]) {
//   populateQuestion5 ();
//   } else {
//   timePenalty ();
//   };
//   });
//   //  BUTTON 2
//   var buttonTwo = document.querySelector("#answer2");
//   buttonTwo.addEventListener("click", function() {
//   // ($(buttonTwo).text() will read it text value as text and will validate it against answer key
//   if ($(buttonTwo).text() === answerKey[0]) {
//   populateQuestion5 ();
//   } else {
//   timePenalty ();
//   };
//   });
//   //  BUTTON 3
//   var buttonThree = document.querySelector("#answer3");
//   buttonThree.addEventListener("click", function() {
//   // ($(buttonThree).text() will read it text value as text and will validate it against answer key
//   if ($(buttonThree).text() === answerKey[0]) {
//   populateQuestion5 ();
//   } else {
//   timePenalty ();
//   };
//   });
//    //  BUTTON 4
//   var buttonFour = document.querySelector("#answer4");
//   buttonFour.addEventListener("click", function() {
//   // ($(buttonFour).text() will read it text value as text and will validate it against answer key
//   if ($(buttonFour).text() === answerKey[0]) {
//   populateQuestion5 ();
//   } else {
//   timePenalty ();
//   };
//   });
//   };

//   userInputQuestion4 ();
// // QUESTION 5-------------------------------------------------------------------------------------------
// function populateQuestion5 () {
//   var questionOrder = ["Question 5"]
//   var questionText = ["Question 5 bla bla bla"]
//   var questionAnswers = ["aaaaa1","aaaaa2","aaaaa3","aaaaa4"]
//   // questionOrder.unshift("Question 2"), questionText.unshift("Question 2 bla bla bla"), questionAnswers.unshift("aa1","aa2","aa3","aa4");
//   // Randomizing questions in the array
//   let questionAnswersRandomized = questionAnswers
//   .map(value => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value)

//   var questionH1 = document.querySelector('h1');
//   var questionP = document.querySelector("#p");
//   var answerOne = document.querySelector("#answer1");
//   var answerTwo = document.querySelector("#answer2");
//   var answerThree = document.querySelector("#answer3");
//   var answerFour = document.querySelector("#answer4");
//    // Adds text from 1 entry of question array
//   questionH1.innerText = questionOrder[0];
//   // adds text 1 1st entry from question text array
//   questionP.innerText = questionText[0];
//   // adds answers 1-4
//   answerOne.innerText = questionAnswersRandomized[0];
//   answerTwo.innerText = questionAnswersRandomized[1];
//   answerThree.innerText = questionAnswersRandomized[2];
//   answerFour.innerText = questionAnswersRandomized[3];
// };
// // INPUT---------------------------------------------------------
// function userInputQuestion5 () {
//   var answerKey = ["aaaa1"]
//   // BUTTON 1
//   var buttonOne = document.querySelector("#answer1");
//   buttonOne.addEventListener("click", function() {
//   // ($(buttonOne).text() will read it text value as text and will validate it against answer key
//   if ($(buttonOne).text() === answerKey[0]) {
//   populateQuestion5 ();
//   } else {
//   timePenalty ();
//   };
//   });
//   //  BUTTON 2
//   var buttonTwo = document.querySelector("#answer2");
//   buttonTwo.addEventListener("click", function() {
//   // ($(buttonTwo).text() will read it text value as text and will validate it against answer key
//   if ($(buttonTwo).text() === answerKey[0]) {
//   populateQuestion5 ();
//   } else {
//   timePenalty ();
//   };
//   });
//   //  BUTTON 3
//   var buttonThree = document.querySelector("#answer3");
//   buttonThree.addEventListener("click", function() {
//   // ($(buttonThree).text() will read it text value as text and will validate it against answer key
//   if ($(buttonThree).text() === answerKey[0]) {
//   populateQuestion5 ();
//   } else {
//   timePenalty ();
//   };
//   });
//    //  BUTTON 4
//   var buttonFour = document.querySelector("#answer4");
//   buttonFour.addEventListener("click", function() {
//   // ($(buttonFour).text() will read it text value as text and will validate it against answer key
//   if ($(buttonFour).text() === answerKey[0]) {
//   populateQuestion5 ();
//   } else {
//   timePenalty ();
//   };
//   });
//   };

//   userInputQuestion5 ();