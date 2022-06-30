// My pseudocode:
// i need welcome page (done)
// make timer
// create list of questions in html, then hide them in js
// question function: conditional statement if this then that:1) if right give alert correct and hide current question, move on to next; 2) if wrong give allert wrong and subract time from timer and return to question




// TIMER------------------------------------
var timerEl = document.getElementById('countdown');
var buttonElOne = document.querySelector('#Answer1');
var buttonElTwo = document.querySelector('#Answer2');
var buttonElThree = document.querySelector('#Answer3');
var buttonElFour = document.querySelector('#Answer4');
var timeLeft = 60;
// Timer----------------------------------------------------------------------
function countdown() {
    // var timeLeft = 61;
  
    var timeInterval = setInterval(function () {
     if (timeLeft > 1) {
     timerEl.textContent = 'Timer: ' + timeLeft;
     timeLeft--;
     } else {
     timerEl.textContent = '0';
     clearInterval(timeInterval);
      }
    }, 1000);
  }
// timer end------------------------------------------------------------------------------------
// activates countdown function
//   countdown();
// time penalty--------------------------------------------------------------------------------
//   var timePenalty = buttonEl.addEventListener("click", function() {
//     if (timeLeft > 1) {
//         // Set the `textContent` of `timerEl` to show the remaining seconds
//         timerEl.textContent = 'Timer: ' + timeLeft;
//         // Decrement `timeLeft` by 1
//         timeLeft-=5;
//       } else {
//         // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//         timerEl.textContent = '0';
//         // Use `clearInterval()` to stop the timer
//         clearInterval(timeInterval);
//       }
//     }, 1000);
  //time penalty end---------------------------------------------------------------------------- 
    
//Populate form function---------------------------------------------------------------------
var questionOrder = ["Question 1", "Question 2"]
var questionText = ["Question 1 bla bla", "Question 2 bla bla"]
var questionOneAnswers = ["a1","a2","a3","a4"]


function populate () {
    var h1 = document.querySelector('h1');
    var p = document.querySelector("#p");
    var one = document.querySelector("#answer1");
    var two = document.querySelector("#answer2");
    var three = document.querySelector("#answer3");
    var four = document.querySelector("#answer4");
     // Adds text from 1 entry of question array
    h1.innerText = questionOrder[0];
    // adds text 1 1st entry from question text array
    p.innerText = questionText[0];
    // adds answers 1-4
    one.innerText = questionOneAnswers[0];
    two.innerText = questionOneAnswers[1];
    three.innerText = questionOneAnswers[2];
    four.innerText = questionOneAnswers[3];
};
// populate form function end----------------------------------------------------------------------
// Ativates populate function----------------------------------------------------------------------
populate();

// -------------------------------------------------------------------------------------------------
// Need user input----------------------------------------------------------------------------------
var correctAnswers = ["a1","a5"]

// var one = document.querySelector("#answer1");
var buttonElOne = document.querySelector("#answer1");
buttonElOne.addEventListener("click", function() {
    // on click of button 1 it equals entry one
    
    if (buttonElOne == correctAnswers[0]) {
       
        alert("Correct");
     } else {
        alert("Incorrect");
     };
 });
 console.log(buttonElOne);
 console.log(correctAnswers[0]);
 

// // var two = document.querySelector("#answer2");
// var buttonElTwo = document.querySelector("#answer2");
// buttonElTwo.addEventListener("click", function() {
//     // on click of button 1 it equals entry one
//     buttonElTwo = two;
//  });

//  if (buttonElOne === correctAnswers[0]) {
//     alert("Correct");
//  } else {
//     alert("Incorrect");
//  };










// Now i need function to valida correct answer against incorrect answers
var correctAnswers = ["a1","a5","a9","a14"]

function validate () {

}
// -------------------------------------------------------------------------------------------------



  
