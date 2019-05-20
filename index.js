"use strict"

let questionNumber = 0;
let tally = 0;

//On click of the start button, remove the home view and add the questions view
function handleStartButton() {
  $('main').on('click', '.start', function() {
    $('.start-screen').remove();
    $('.questions').css('display', 'flex');
    $('.question-number').text(1);
    renderQuestion();
  });
  console.log('`handleStartButton` ran');
}

//Loop through and Display each question from the STORE and the choices with a submit button
function generateQuestions() {
  console.log('`generateQuestions` ran');
  console.log(questionNumber, STORE.length);
  if(questionNumber < STORE.length) {
    return `<div class="numbers">Question: ${questionNumber + 1} of 9</div>
    <h1 class="question-title">${STORE[questionNumber].question}</h1>
      <form>
        <input type="radio" name="answers" value="${STORE[questionNumber].answers[0]}">${STORE[questionNumber].answers[0]}<br>
        <input type="radio" name="answers" value="${STORE[questionNumber].answers[1]}">${STORE[questionNumber].answers[1]}<br>
        <input type="radio" name="answers" value="${STORE[questionNumber].answers[2]}">${STORE[questionNumber].answers[2]}<br>
        <input type="radio" name="answers" value="${STORE[questionNumber].answers[3]}">${STORE[questionNumber].answers[3]}<br>
        <button type="submit" class="submit">Submit</button>
      </form>
      <div class="tally numbers">Score: <span class="score">0</span></div>`;
  } else {
    overallScore();
    handleStartNewButton();
  }
}

function renderQuestion() {
  $('.questions').html(generateQuestions());
  console.log('`renderQuestion()` ran');
}

//increment question number for each question
function changeQuestionNumber() {
  questionNumber ++;
  console.log(questionNumber);
  //$('.question-number').text(questionNumber + 1);
}

//increment score
function changeTally() {
  tally ++;
  console.log(tally);
}

function handleSubmitButton() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let selected = $('input:checked');
    let userAnswer = selected.val();
     console.log(userAnswer, 'user answwer');
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    console.log(correctAnswer, 'correct answer');
    //if answer is correct, render html for correct statement with image and alt
    if(correctAnswer === userAnswer) {
      console.log('that is correct');
    } else {
      //if answer is incorrect, render html for incorrect statement with correct statement and image and alt
      console.log('`handleSubmitButton` ran')
    }
  })
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
  //handleSubmitButton();
  //handleStartNewButton();
}



$(handleQuizApp);
