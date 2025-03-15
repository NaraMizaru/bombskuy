class Sprite2D {
  constructor(width, height, img) {
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = img;
  }

  create() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  draw() {
    this.create();
  }
}