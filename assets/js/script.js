// My pseudocode:
// i need welcome page (done)
// make timer
// create list of questions in html, then hide them in js
// question function: conditional statement if this then that:1) if right give alert correct and hide current question, move on to next; 2) if wrong give allert wrong and subract time from timer and return to question








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
    };
// timer end------------------------------------------------------------------------------------   
//Populate form function---------------------------------------------------------------------
function populate () {
    var questionOrder = ["Question 1"]
    var questionText = ["Question 1 bla bla bla"]
    var questionAnswers = ["a1","a2","a3","a4"]
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
// populate form function end----------------------------------------------------------------------
populate();
// User input Function-----------------------------------------------------------------------------
function userInput () {
var answerKey = ["a1"]
var buttonOne = document.querySelector('#Answer1');
var buttonTwo = document.querySelector('#Answer2');
var buttonThree = document.querySelector('#Answer3');
var buttonFour = document.querySelector('#Answer4');
// BUTTON 1----------------------------------------------------------------------------------------
var buttonOne = document.querySelector("#answer1");
buttonOne.addEventListener("click", function() {
// ($(buttonOne).text() will read it text value as text and will validate it against answer key
if ($(buttonOne).text() === answerKey[0]) {
alert("Correct");
} else {
// alert("Incorrect");
timePenalty ();
};
 });
//  console.log(buttonOne);
//  console.log(answerKey[0]);
//  BUTTON 2------------------------------------------------------------------------------------------
var buttonTwo = document.querySelector("#answer2");
buttonTwo.addEventListener("click", function() {
// ($(buttonTwo).text() will read it text value as text and will validate it against answer key
if ($(buttonTwo).text() === answerKey[0]) {
alert("Correct");
} else {
// alert("Incorrect")
timePenalty ();
};
 });
//  console.log(buttonTwo);
//  console.log(answerKey[0]);
//  BUTTON 3--------------------------------------------------------------------------------------------
var buttonThree = document.querySelector("#answer3");
buttonThree.addEventListener("click", function() {
// ($(buttonThree).text() will read it text value as text and will validate it against answer key
if ($(buttonThree).text() === answerKey[0]) {
alert("Correct");
} else {
// alert("Incorrect");
timePenalty ();
};
 });
//  console.log(buttonThree);
//  console.log(answerKey[0]);
 //  BUTTON 4----------------------------------------------------------------------------------------------
var buttonFour = document.querySelector("#answer4");
buttonFour.addEventListener("click", function() {
// ($(buttonFour).text() will read it text value as text and will validate it against answer key
if ($(buttonFour).text() === answerKey[0]) {
alert("Correct");
} else {
// alert("Incorrect");
timePenalty ();
};
 });
//  console.log(buttonThree);
//  console.log(answerKey[0]);
};
// User input Function end-----------------------------------------------------------------------------
userInput ();






 
 


// -------------------------------------------------------------------------------------------------



  
