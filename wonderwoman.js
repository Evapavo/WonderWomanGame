function Woman (canvas, sprite){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext ("2d");
  this.vx = 0;
  this.vy = 2;
  this.x = 80;
  this.y = 60;
  this.gravity = 0.015;
  this.scale = 0.06;


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

//applying negative gravity//
Woman.prototype.push = function() {
  this.vy -= 1;
};

//update//
Woman.prototype.update = function (){
ctx.clearRect(0,0, canvas.width, canvas.height);
};

Woman.prototype.isReady = function() {
  return this.sprite.isReady;
};

// Apply gravity
  this.vy += this.gravity;
  this.y += this.vy;



setInterval(function() {
  this.woman.update();
}, 20);

//adding listener for spacebar//
document.addEventListener("keypress", function(event) {
  if (event.keyCode == 32) {
    this.woman.push();
  }

    });
