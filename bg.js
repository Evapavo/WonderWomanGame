function Bg (ctx, sprite){
  this.ctx = ctx;
  this.x = canvas.width;
  this.y = 0;
  this.scale = 0.5;

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.width = this.sprite.width * this.scale;
    this.height = this.sprite.height * this.scale;
    this.sprite.src = sprite;
  }).bind(this);
}

// setInterval(draw, 20);

Bg.prototype.drawBg = function() {
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (this.x <= 0) {
    this.x = canvas.width;
  }

  if (this.x > 0) {
    this.ctx.drawImage(this.sprite, -this.width + this.x, this.y, this.width, this.height);
  } else if (this.x - this.sprite.width > 0) {
    this.ctx.drawImage(this.sprite, -this.width * 2 + this.x, this.y, this.width, this.height);
  }

 this.ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);

  this.x -= 0.5;
}
