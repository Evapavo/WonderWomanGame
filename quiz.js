$(document).ready(function() {
start(questionNumber);

$(".answer").on("click", function(event) {

    var userAnswer = parseInt($(this).attr("id"));
    answerCheck(userAnswer);

    setTimeout(function() {
                $(".answer").removeClass("correct incorrect");
                 start(questionNumber);
             }, 1500);

     questionNumber++;
  });

});

var questionNumber = 0;
    totalCorrect = 0;


var allQuestions = [
     {  question: 'What is the first name of Wonder Woman?',
        choices: ["Rachel", "Diana", "Jane"],
        answer: 1},

    {  question: "What tribe does she belong to?",
        choices: ["Amazons", "Themyscirans", "Aphrodites" ],
        answer: 0},

    {   question: "Which one is not a Wonder Woman superpower?",
        choices: ["Talk to animals", "Time travel", "Telepathy"],
        answer: 1},

    {   question: 'Whom is she dating in her stories?',
        choices: ["Flash Gordon", "Ironman", "Superman"],
        answer: 2},

    {   question: "How are her superpowers compared to Superman?",
        choices: ["Weaker", "Same level", "Stronger",],
        answer: 1},

    {   question: "Wonder Woman is an icon of?",
        choices: ["Justice", "Free Women", "War Winners"],
        answer: 2},

  ];

// continue with next question or end
var start = function(questionNumber) {
      $('h2').hide().fadeIn(400);

      if(questionNumber !== allQuestions.length - 1){
          question(questionNumber);
      }
      else{
          end("Well done, babe", "#correctImage");
      }
};

// show question and possible answers
function question(questionNum) {
      $("h2").text(allQuestions[questionNum].question);

      $.each(allQuestions[questionNum].choices,
         function(i, answers){
         $("#" + i).html(answers);
      });
}

//show final text, image and try again
function end(text, image) {
  $("ul").hide();
  $("h2").text(text);
  $(image).show();
  $("#try-again-container").show();

  restart();
}


function restart(){
  $("#try-again").click(function(){
    questionNumber = 0;
    totalCorrect = 0;

    start(questionNumber);
    $("#incorrectImage").hide();
    $("correctImage").hide();
    $("#try-again-container").hide();
    $("ul").fadeIn(400);
  });
}

function answerCheck(userAnswer) {
    var correctAnswer = allQuestions[questionNumber].answer;

     if (userAnswer === correctAnswer) {
         $("#" + userAnswer).addClass("correct");
         totalCorrect++;
     }
     else {
       end("You didn't know that? Really?", "#incorrectImage");
        // $("#" + userAnswer).addClass("incorrect");
     }
}






//div y show
//ocultar preguntas
//totalcorrect ++
//totalcorrrect =allquestions.length -1
