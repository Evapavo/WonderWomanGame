function Quiz () {
  this.allQuestions = [
  {
    question: "What is the first name of Wonder Woman?",
    choices:["Rachel", "Diana", "Jane"],
    answer: 1
  },
  {
    question: "What tribe does she belong to?",
    choices:["Amazons", "Themyscirans", "Aphrodites"],
    answer: 0
  },
  {
    question: "Which one is not a Wonder Woman superpower?",
    choices: ["Talk to animals", "Time travel", "Telepathy"],
    answer: 1
  },
 {
   question: "Whom is she dating in her stories?",
   choices: ["Flash Gordon", "Ironman", "Superman"],
   answer: 2
 },
 {
    question: "How are her superpowers compared to Superman?",
    choices:["Weaker", "Same level", "Stronger"],
    answer: 1
  },
  {
    question: "Wonder Woman is an icon of?",
    choices:["Justice", "Free Women", "War Winners"],
    answer: 1
   }
];
 this.questionNumber = 0;
 this.totalCorrect = 0;
 this.userAnswer = 0;
 this.correctAnswer = 0;

}

Quiz.prototype.answerCheck = function(userAnswer) {
  var correctAnswer = this.allQuestions[this.questionNumber].answer;
  if (userAnswer === correctAnswer) {
    $("#" + userAnswer).addClass("correct");
    this.totalCorrect++;
    this.questionNumber++;
    setTimeout((function(){
      this.rotation();
    }).bind(this), 200);
    return true;
  } else {
    $("#" + userAnswer).addClass("incorrect");
    this.questionNumber++;
    setTimeout((function(){
      this.rotation();
    }).bind(this), 200);
    return false;
  }
};

Quiz.prototype.start = function() {
    this.showQuestions(this.questionNumber);
};

Quiz.prototype.clearAnswers = function(){
  $(".answer").removeClass("correct incorrect");
};

Quiz.prototype.rotation = function(userAnswer) {
  this.clearAnswers();
  $('h2').hide().fadeIn(400);
  if(this.questionNumber !== this.allQuestions.length - 1){
    this.showQuestions(this.questionNumber);
  } else {
    this.end("Well done, babe", "#correctImage");
  }
};

Quiz.prototype.showQuestions = function(questionNum) {
   $("h2").text(this.allQuestions[questionNum].question);
   $.each(this.allQuestions[questionNum].choices, function(i, answers) {
     $("#" + i).html(answers);
   });
};

Quiz.prototype.end = function(text, image) {
  $("ul").hide();
  $("h2").text(text);
  $(image).show();
  $("#try-again-container").show();
};

Quiz.prototype.restart = function() {
  this.clearAnswers();

  this.questionNumber = 0;
  this.totalCorrect = 0;

  this.start();
  $("#gameoverImage").hide();
  $("#correctImage").hide();
  $("#try-again-container").hide();
  $("ul").fadeIn(400);
};
