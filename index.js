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
    return `<img class="questions-background" src="./img/castle.jpg" alt="portrait of castle">
    <div class="numbers">Question: ${questionNumber + 1} of 9</div>
    <h1 class="question-title">${STORE[questionNumber].question}</h1>
      <form>
        <input type="radio" name="answers" value="${STORE[questionNumber].answers[0]}">${STORE[questionNumber].answers[0]}<br>
        <input type="radio" name="answers" value="${STORE[questionNumber].answers[1]}">${STORE[questionNumber].answers[1]}<br>
        <input type="radio" name="answers" value="${STORE[questionNumber].answers[2]}">${STORE[questionNumber].answers[2]}<br>
        <input type="radio" name="answers" value="${STORE[questionNumber].answers[3]}">${STORE[questionNumber].answers[3]}<br>
        <button type="submit" class="submit">Submit</button>
      </form>
      <div class="tally numbers">Score: <span class="score">${tally}</span></div>`;
  } else {
    overallScore();
    handleStartNewButton();
  }
}

function renderQuestion() {
  $('.questions').css('display', 'flex');
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
  $('.questions').on('click', '.submit', function(event) {
    event.preventDefault();
    let selected = $('input:checked');
    let userAnswer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer.correct}`;
    $('.questions').css('display', 'none');
    $('.correct').css('display', 'flex');
    //if answer is correct, render html for correct statement with image and alt
    if(correctAnswer === userAnswer) {
      changeTally();
      console.log('that is correct');
      console.log($.isArray(STORE[questionNumber].correctAnswer.img, "Array"));
      if($.isArray(STORE[questionNumber].correctAnswer.img)) {
        $('.correct').html(`<h1 class="correct-title">You are Correct!</h1>
        <div class="image-wrapper">
          <img src="${STORE[questionNumber].correctAnswer.img[0]}" alt="${STORE[questionNumber].correctAnswer.alt[0]}" class="correct-image">
          <img src="${STORE[questionNumber].correctAnswer.img[1]}"
          alt="${STORE[questionNumber].correctAnswer.alt[1]}" class="correct-image">
        </div>
        <p class="correct-answer">${STORE[questionNumber].correctAnswer.correct}, that is correct!</p>
        <button type="button" name="button" class="next">Next</button>`);
      } else {
        $('.correct').html(`<h1 class="correct-title">You are Correct!</h1>
        <div class="image-wrapper">
          <img src="${STORE[questionNumber].correctAnswer.img}"          alt="${STORE[questionNumber].correctAnswer.alt}" class="correct-image">
        </div>
        <p class="correct-answer">${STORE[questionNumber].correctAnswer.correct}, that is correct!</p>
        <button type="button" name="button" class="next">Next</button>`);
      }
    } else {
      //if answer is incorrect, render html for incorrect statement with correct statement and image and alt
      if($.isArray(STORE[questionNumber].correctAnswer.img)) {
        $('.correct').html(`<h1 class="correct-title">You answered ${userAnswer}, that is incorrect!</h1>
        <div class="image-wrapper">
          <img src="${STORE[questionNumber].correctAnswer.img[0, 1]}" alt="${STORE[questionNumber].correctAnswer.alt[0, 1]}" class="correct-image">
        </div>
        <p>The correct answer is ${STORE[questionNumber].correctAnswer.correct}</p>
        <button type="button" name="button" class="next">Next</button>`);
      }
      else {
        $('.correct').html(`<h1 class="correct-title">You answered ${userAnswer}, that is incorrect!</h1>
        <div class="image-wrapper">
          <img src="${STORE[questionNumber].correctAnswer.img}" alt="${STORE[questionNumber].correctAnswer.alt}" class="correct-image">
        </div>
        <p>The correct answer is ${STORE[questionNumber].correctAnswer.correct}</p>
        <button type="button" name="button" class="next">Next</button>`);
      }
    }
  })
}

function handleNextButton() {
  $('.correct').on('click', '.next', function() {
    changeQuestionNumber();
    console.log(questionNumber, 'question number');
    $('.correct').css('display', 'none');
    renderQuestion();
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
  handleSubmitButton();
  handleNextButton();
  //handleStartNewButton();
}



$(handleQuizApp);
