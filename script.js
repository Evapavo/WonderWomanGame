
function Game(canvas) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext('2d');
  this.xPos = 0;
  this.woman = new Woman(this.canvas, "images/Wonder-Woman.png");
  this.bg = new Image();
  this.bg.src = "images/bg.jpg";
  // this.bg.onload = function (){
  //   this.ctx.drawImage(this.bg,0,0);
  //
  // };
}

Game.prototype.drawBg = function() {
  if (true) {
    this.ctx.save();
    this.ctx.drawImage(this.bg,this.xPos,0);
    this.ctx.restore();
  }
};

Game.prototype.draw = function() {
  if (true) {
    //this.clear();
    this.drawBg();
    this.woman.drawWoman();

  }
  window.requestAnimationFrame(this.draw.bind(this));
};

window.onload = function() {
  var game = new Game("canvas");
  console.log(game);
  game.draw();


//function startGame//
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

//adding listener for spacebar//
document.addEventListener("keypress", function(event) {
  if(event.keyCode == 32) {
    this.woman.push();
  }
});

  function startGame() {

  }

};
