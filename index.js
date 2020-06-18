// instead of global variables, put these variables inside the object "questions"

const STORE = {
  score: 0,
  currentQuestion: 0,
  questions: [
    {
      title: `"Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way."`,
      answers: ["Michael Scott", "Robert Frost", "Sylvia Plath"],
      correct: 0,
    },
    {
      title: `"How wonderful it is that nobody need wait a single moment before starting to improve the world."`,
      answers: ["Clara Barton", "Helen Keller", "Anne Frank"],
      correct: 2,
    },
    {
      title: `"The two most important days in your life are the day you are born and the day you find out why."`,
      answers: ["Steve Jobs", "Ernest Hemingway", "Mark Twain"],
      correct: 2,
    },

    {
      title: `"I attribute my success to this: I never gave or took any excuse."`,
      answers: ["Stephan Covey", "Florence Nightangale", "Dale Carnegie"],
      correct: 1,
    },
    {
      title: `"If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced."`,
      answers: ["Frida Kahlo", "Vincent Van Gogh", "Pam Beesly"],
      correct: 1,
    },
    {
      title: `"I once worked with a guy for three years and never learned his name. Best friend I ever had."`,
      answers: ["Ron Swanson", "Matt Damon", "Kayne"],
      correct: 0,
    },
    {
      title: `"Creativity is intelligence having fun."`,
      answers: ["Orville Wright", "Thomas Eddison", "Albert Einstein"],
      correct: 2,
    },
    {
      title: `“It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”`,
      answers: ["Albus Dumbledore", "Maya Angelou", "Pam Beesly"],
      correct: 0,
    },
  ],
};

function handleStart() {
  $(".start").on("click", ".start-quiz", function () {
    $(".start, .correct, .incorrect").hide();
    $(".quiz, .quiz-info").show();
    showQuestions();
  });
}

function handleAnswerChoice() {
  $(".quiz ul").on("click", "input", function () {
    $(".selected").removeClass("selected"); //removing class: When user clicks on li, removes whichever one has clss selected
    $(this).parent().addClass("selected"); //adding class back to knew click
  });
}

function handleQuestionSubmit() {
  $(".quiz").submit(function (event) {
    event.preventDefault(); //prevent re-loading of page(default)

    if ($("li.selected").length) {
      let guess = parseInt($("li.selected").children("input").attr("id"));
      checkAnswer(guess);
    } else {
      alert("Who said it? Select your answer");
    }
  });
}

function handleNext() {
  $("body").on("click", ".next-question", nextQuestion);
}

function handleReset() {
  $(".summary .restart-quiz").click(restartQuiz);
}

function showQuestions() {
  updateQuestionCount();
  $(".quiz").show();
  let question = STORE.questions[STORE.currentQuestion];
  $(".quiz h2").text(question.title);
  $(".quiz ul").html("");
  for (let i = 0; i < question.answers.length; i++) {
    $(".quiz ul").append(`<li>
        <input type="radio" name="answer" value="${i}" id="${i}"/> 
        <label for="${i}">${question.answers[i]}</label>
      </li>
    `); //li has id of index that represents answer
  }
}
function checkAnswer(guess) {
  let question = STORE.questions[STORE.currentQuestion];
  if (question.correct === guess) {
    STORE.score++;
    $(".score").text(STORE.score);
    correctAnswer();
  } else {
    incorrectAnswer();
  }
}

function correctAnswer() {
  $(".quiz, .incorrect").hide();
  $(".correct")
    .show()
    .html(
      `<h3>Your answer is correct!</h3> <button class="next-question"> next question </button>`
    );
}

function incorrectAnswer() {
  const { correct, answers } = STORE.questions[STORE.currentQuestion];
  $(".quiz").hide();
  $(".incorrect")
    .show()
    .html(
      `Wrong! The correct answer is ${answers[correct]} <button class="next-question"> next question </button>`
    );
}

function nextQuestion() {
  STORE.currentQuestion++;
  $(".correct,.incorrect").hide();
  if (STORE.currentQuestion >= STORE.questions.length) {
    showSummary();
  } else {
    showQuestions();
  }
}

function updateQuestionCount() {
  $(".numQuestions").text(STORE.questions.length);
  $(".currentQ").text(STORE.currentQuestion + 1);
}

function showSummary() {
  $(".quiz, .quiz-info").hide();
  $(".summary").show();
  $(".summary p").text(
    `You scored ${STORE.score} out of ${STORE.questions.length} correct! `
  );
}

function restartQuiz() {
  $(".summary").hide();
  $(".quiz, .quiz-info").show();
  STORE.score = 0;
  $(".score").text(STORE.score);
  STORE.currentQuestion = 0;
  showQuestions();
}

function main() {
  $(".correct, .incorrect").hide();

  handleAnswerChoice();
  handleQuestionSubmit();
  handleStart();
  handleReset();
  handleNext();
}

$(main);
