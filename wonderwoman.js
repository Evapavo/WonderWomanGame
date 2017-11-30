function Woman (ctx, sprite){
  this.ctx = ctx;
  this.vx = 0;
  this.vy = 0.5;
  this.pushs = 0;
  this.x = 80;
  this.y = 60;
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

Woman.prototype.drawWoman = function() {
  if (this.isReady()) {
      this.ctx.drawImage(
        this.sprite,
        this.x,
        this.y,
        this.width,
        this.height
      );
  }
};

//applying negative gravity//
Woman.prototype.push = function() {
  this.pushs -= 200;
};

//update//
Woman.prototype.update = function () {
  if (this.pushs < 0) {
    this.pushs += 0.5;
    this.y -= 0.5;
  } else {
    this.y += 0.5;
  }
};

Woman.prototype.isReady = function() {
  return this.sprite.isReady;
};
