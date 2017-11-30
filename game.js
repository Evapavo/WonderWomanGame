function Game(canvas) {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext('2d');
  this.xPos = 0;
  this.bg = new Bg(this.ctx, 'images/planets.png');
  this.woman = new Woman(this.ctx, "images/Wonder-Woman.png");
  // this.bg = new Image();
  // this.bg.src = "images/planets.png";
}

// Game.prototype.drawBg = function() {
//   this.ctx.drawImage(this.bg,this.xPos,0);
// };

Game.prototype.draw = function() {
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  this.bg.drawBg();
  this.woman.update();
  this.woman.drawWoman();
};

// Start Game

window.onload = function() {
  var game = new Game("canvas");

  setInterval(game.draw.bind(game), 20);

  //adding listener for spacebar//
  document.addEventListener("keypress", function(event) {
    if(event.keyCode == 32) {
      this.woman.push();
    }
  }.bind(game));
};
