"use strict"

let questionNumber = 0;
let tally = 0;

//On click of the start button, remove the home view and add the questions view
function handleStartButton() {
  $('main').on('click', '.start', function() {
    $('.start-screen').hide();
    $('.questions').css('display', 'flex');
    $('.question-number').text(1);
    renderQuestion();
  });
}
//Loop through and Display each question from the STORE and the choices with a submit button
function generateQuestions() {
  if(questionNumber < STORE.length) {
    return `<img class="questions-background" src="./img/castle.jpg" alt="portrait of castle">
    <div class="numbers">Question: ${questionNumber + 1} of 9</div>
    <h1 class="question-title">${STORE[questionNumber].question}</h1>
      <form>
        <fieldset>
          <label>
            <input
              type="radio"
              name="answers"
              value="${STORE[questionNumber].answers[0]}"
              required>
            ${STORE[questionNumber].answers[0]}
          </label><br>
          <label>
            <input
              type="radio"
              name="answers"
              value="${STORE[questionNumber].answers[1]}"
              required>
            ${STORE[questionNumber].answers[1]}
          </label><br>
          <label>
            <input
              type="radio"
              name="answers"
              value="${STORE[questionNumber].answers[2]}"
              required>
            ${STORE[questionNumber].answers[2]}
          </label><br>
          <label>
            <input
              type="radio"
              name="answers" value="${STORE[questionNumber].answers[3]}"
              required>
            ${STORE[questionNumber].answers[3]}
          </label>
          <button type="button" class="submit">Submit</button>
        </fieldset>
      </form>
      <div class="tally numbers">Score: <span class="score">${tally}</span></div>`;
  } else {
    overallScore();
  }
}

function renderQuestion() {
  //if(questionNumber < STORE.length) {
    $('.questions').css('display', 'flex');
    $('.questions').html(generateQuestions());
    console.log('`renderQuestion()` ran');
  //} else {

  //}
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



function name() {
  console.log('store', STORE[questionNumber].correctAnswer.name);
  if(STORE[questionNumber].correctAnswer.name !== '') {
    return STORE[questionNumber].correctAnswer.name;
  } else {
    return '';
  }
}

function handleSubmitButton() {
  $('.questions').on('click', '.submit', function() {
    let selected = $('input:checked');
    let userAnswer = selected.val();
    console.log(userAnswer, 'user andwer');
    if(userAnswer === undefined) {
      window.alert('Please select one of the options');
    } else {
      let correctAnswer = `${STORE[questionNumber].correctAnswer.correct}`;
      $('.questions').css('display', 'none');
      $('.correct').css('display', 'flex');
      //if answer is correct, render html for correct statement with image and alt
      const images = STORE[questionNumber].correctAnswer.images.map(img => `<img src="${img.img}" alt="${img.alt}" class="correct-image">`).join('');
      if(correctAnswer === userAnswer) {
        changeTally();
        console.log('that is correct');
        $('.correct').html(`<h1 class="correct-title">You are Correct!</h1>
          <div class="image-wrapper">
            ${images}

          </div>
          ${name()}
          <p class="correct-answer">${STORE[questionNumber].correctAnswer.correct}, that is correct!</p>
          <button type="button" name="button" class="next">Next</button>`);
      } else {
        $('.correct').html(`<h1 class="correct-title">You answered ${userAnswer}, that is Incorrect!</h1>
        <div class="image-wrapper">
          ${images}

        </div>
        ${name()}
        <p class="correct-answer">The correct answer is ${STORE[questionNumber].correctAnswer.correct}!</p>
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

//show how many right out of total and a message based on that number
function overallScore() {
  console.log('`overallScore` ran');
  $('.questions').css('display', 'none');
  $('.results').css('display', 'flex');
    let numCorrect = tally;
    console.log(numCorrect, 'final number correct');
    if(numCorrect > 6) {
      $('.results').html(`<h1>You got ${numCorrect} out of 9 correct</h1>
        <img class="results-image" src="./img/tudorRose.jpg" alt="Tudor Rose">
        <p>You are Royal enough to mary your cousin!<br>Congratulations!</p>
        <button type="button" name="button" class="try-again">Try again</button>`);
    } else if (numCorrect >= 4 && numCorrect <= 6) {
      $('.results').html(`<h1>You got ${numCorrect} out of 9 correct</h1>
        <img class="results-image" src="./img/henryShoe.jpg" alt="Henry's Shoe">
        <p>You are a commoner! <br /> You are not fit to lick the Kings shoes!</p>
        <button type="button" name="button" class="try-again">Try again</button>`);
    } else {
      $('.results').html(`<h1>You got ${numCorrect} out of 9 correct</h1>
        <img class="results-image" src="./img/kidHead.jpg" alt="A kid's head on a platter">
        <p>You are a lowly peasant! <br /> King Henry the 8th would have had you beheaded!</p>
        <button type="button" name="button" class="try-again">Try again</button>`);
    }
    handleStartNewButton();
}

//start a new quiz
function handleStartNewButton() {
  $('main').on('click', '.try-again', function() {
    $('.results').css('display', 'none');
    $('.start-screen').show();
    questionNumber = 0;
    tally = 0;
    handleStartButton();
  })
  console.log('`handleStartNewButton` ran');

}

function handleQuizApp() {
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
}



$(handleQuizApp);
