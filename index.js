"use strict"

let questionNumber = 0;
let tally = 0;

function changeQuestionNumber() {
  //increment question number for each question
  questionNumber ++;
}

//increment score
function changeTally() {
  tally ++;
}

function startQuiz() {
  //On click of the start button, remove the home view and add the questions view
  console.log('`startQuiz` ran');
}

function generateQuestions() {
  //Loop through and Display each question from the STORE and the choices with a submit button
  //one question at a time
  //Make another function to update the number and number correct
  console.log('`generateQuestions` ran');
}

function correctIncorrect() {
  //if answer is correct, render html for correct statement with image and alt
  changeTally();
  changeQuestionNumber();
  //if answer is incorrect, render html for incorrect statement with correct statement and image and alt
  console.log('`correctIncorrect` ran')
  changeQuestionNumber();

}

function overallScore() {
  //show how many right out of total and a message based on that number
  console.log('`overallScore` ran');
}

function startNew() {
  //start a new quiz
  console.log('`startNew` ran');
}

function handleQuizApp() {
  startQuiz();
  generateQuestions();
  correctIncorrect();
  overallScore();
  startNew();
}



$(handleQuizApp);
