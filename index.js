let score = 0;
let currentQuestion = 0;
let questions = [
  {
    title:
      "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
    answeres: ["Andy Dwyer", "Michael Scott", "Robert Frost", "Sylvia Plath"],
    Correct: 1,
  },
  {
    title:
      "The two most important days in your life are the day you are born and the day you find out why.",
    answeres: ["Steve Jobs", "Ernest Hemingway", "Mark Twain"],
    Correct: 3,
  },
  {
    title:
      "Unagi is a total state of awareness. Only by achieving true unagi can you be prepared for any danger that may befall you.",
    answeres: ["Ross Geller", "Socrates", "Albus Dumbledore", "Oprah Winfrey"],
    Correct: 0,
  },
  {
    title:
      "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
    answeres: [
      "Pablo Picasso",
      "Frida Kahlo",
      "Vincent Van Gogh",
      "Pam Beesly",
    ],
    Correct: 2,
  },
];

$(document).ready(function () {
  $(".start a").click(function (e) {
    e.preventDefault();
    $(".start").hide();
    $(".quiz").show();
    showQuestions();
  });
});

function showQuestions() {
  let question = questions[currentQuestion];
  $(".quiz h2").text(question.title);
}
function checkAnswer() {}
function showSummary() {}
