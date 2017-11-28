
function Woman (canvas, sprite){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext ("2d");
  this.speedX = 0;
  this.speedY = 0;
  this.gravity = 0.15;
  this.gravitySpeed = 10;
  this.x = 100;
  this.y = 100;
  this.scale = 0.1;

  this.sprite = new Image ();
  this.sprite.src = sprite;
  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.width = this.sprite.width * this.scale;
    this.height = this.sprite.height * this.scale;
    this.sprite.src = sprite;
  }).bind(this);

}



Woman.prototype.drawWoman = function (){
if (this.isReady ()) {
    this.ctx.save();
     this.ctx.drawImage(
      this.sprite,
      this.x,
      this.y,
      this.width,
      this.height
);
   this.ctx.restore();
}
};

Woman.prototype.isReady = function() {
  return this.sprite.isReady;
};

//applying negative gravity//
Woman.prototype.push = function() {
  this.speedY -= 5;

};

//update//
Woman.prototype.update = function (){
ctx.clearRect(0,0, canvas.width, canvas.height);
};


//adding listener for spacebar//
document.addEventListener("keypress", function(event) {
  if (event.keyCode == 32) {
    Woman.push();
  }

    });
