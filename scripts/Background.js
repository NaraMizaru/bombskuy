class Background extends Sprite2D {
  constructor(x, y, width, height, img) {
    super(width, height, img)
    this.x = x;
    this.y = y;
  }

  draw() {
    this.create();
  }
}