function Game(canvas) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext('2d');
  this.xPos = 0;
  this.bg = new Bg(this.ctx, 'images/planets.png');
  this.woman = new Woman(this.ctx, "images/Wonder-Woman.png");
  this.quiz = new Quiz();

  $(".answer").on("click", (function(event) {
    var userAnswer = parseInt(event.target.id);
    if (this.quiz.answerCheck(userAnswer)) {
      this.woman.push();
    }
  }).bind(this));

  $("#try-again").click(function() {
    this.quiz.restart();
  }.bind(this));
}

Game.prototype.draw = function() {
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  this.bg.drawBg();
  if(this.woman.y >= this.canvas.height) {
    this.quiz.end ("gameover", "#gameoverImage");

    clearInterval(this.interval);
  }
  this.woman.update();
};

// Start Game
var game;
window.onload = function() {
  game = new Game("canvas");
  game.quiz.start(game.quiz.questionNumber);
  game.interval = setInterval(game.draw.bind(game), 20);

  //adding listener for spacebar//
  document.addEventListener("keypress", function(event) {
    if(event.keyCode == 32) {
      this.woman.push();
    }
  }.bind(game));
};
