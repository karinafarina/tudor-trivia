"use strict"

let questionNumber = 0;
let tally = 0;

//On click of the start button, remove the home view and add the questions view
function handleStartButton() {
  $('main').on('click', '.start', function() {
    $('.start-screen').remove();
    $('.questions').css('display', 'flex');
    $('.question-number').text(1);
    handleRenderQuestion();
  });
  console.log('`handleStartButton` ran');
}

//Loop through and Display each question from the STORE and the choices with a submit button
function generateQuestions() {
  if(questionNumber < STORE.length) {
    return
    `<div class="question-${questionNumber}">
      <h1 class="question-title">${STORE[questionNumber].question}</h1>
        <form>
          <input type="radio" name="a" value="Anne Boleyn" checked="true">Anne Boleyn<br>
          <input type="radio" name="b" value="Anne of Cleves">Anne of Cleves<br>
          <input type="radio" name="c" value="Catherine Howard">Catherine Howard<br>
          <input type="radio" name="d" value="Katherine Parr">Katherine Parr<br />
          <button type="submit" name="submit" class="submit" value="Submit">Submit</button>
        </form>`;
  } else {
    overallScore();
    handleStartNewButton();
  }
  console.log('`generateQuestions` ran');
}


function handleRenderQuestion() {
  $('.questions').html(generateQuestions());
  console.log('`handleRenderQuestion()` ran')
}

//increment question number for each question
function changeQuestionNumber() {
  questionNumber ++;
  console.log(questionNumber);
  $('.question-number').text(questionNumber + 1);
}

//increment score
function changeTally() {
  tally ++;
  console.log(tally);
}

function handleSubmitButton(data) {
  $('form').on('submit', function(e) {
    e.preventDefault();
    let selected = $('input:checked');
    let userAnswer = selected.val();
    let correctAnswer = `${data[questionNumber].correctAnswer}`;
    if(correctAnswer === userAnswer) {
      console.log('that is correct');
    }
  })
  //if answer is correct, render html for correct statement with image and alt
  changeTally();
  changeQuestionNumber();
  //if answer is incorrect, render html for incorrect statement with correct statement and image and alt
  console.log('`handleSubmitButton` ran')
  changeQuestionNumber();

}

function overallScore() {
  //show how many right out of total and a message based on that number
  console.log('`overallScore` ran');
}

function handleStartNewButton() {
  //start a new quiz
  console.log('`handleStartNewButton` ran');
}

function handleQuizApp() {
  handleStartButton();
  handleRenderQuestion();
  //handleSubmitButton();
  //handleStartNewButton();
}



$(handleQuizApp);
