"use strict"

let questionNumber = 0;
let tally = 0;

//increment question number for each question
function changeQuestionNumber() {
  questionNumber ++;
  console.log(questionNumber);
}

//increment score
function changeTally() {
  tally ++;
  console.log(tally);
}

//On click of the start button, remove the home view and add the questions view
function startQuiz() {
  $('main').on('click', '.start', function() {
    $('.start-screen').remove();
    generateQuestions();
  });
  console.log('`startQuiz` ran');
}

function generateQuestions() {
  //Loop through and Display each question from the STORE and the choices with a submit button
  //one question at a time
  //Make another function to update the number and number correct
  if(questionNumber < STORE.length) {
    return `<section class="questions">
      <h1 class="question-1-title">${STORE[questionNumber].question}</h1>
      <form>
        <input type="radio" name="a" value="Anne Boleyn" checked="true">Anne Boleyn<br>
        <input type="radio" name="b" value="Anne of Cleves">Anne of Cleves<br>
        <input type="radio" name="c" value="Catherine Howard">Catherine Howard<br>
        <input type="radio" name="d" value="Katherine Parr">Katherine Parr<br />
        <a href="./answers.html"><button type="submit" name="submit" class="submit" value="Submit">Submit</a>
      </form>
    </section>`;
  } else {
    overallScore();
    startNew();
  }
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
  correctIncorrect();
  overallScore();
  startNew();
}



$(handleQuizApp);
