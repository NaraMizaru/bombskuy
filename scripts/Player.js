class Player extends Sprite2D {
  constructor(x, y, width, height, img) {
    super(width, height, img);
    this.x = x;
    this.y = y;
  }

  draw() {
    this.create();
  }

  move(direction) {
    this.img.src = "./assets/char_" + direction + ".png";
    let _tmp = [...playerPosition];

    if (direction === "up") _tmp[1] -= 1;
    else if (direction === "down") _tmp[1] += 1;
    else if (direction === "left") _tmp[0] -= 1;
    else if (direction === "right") _tmp[0] += 1;

    if (blocks[_tmp[1]][_tmp[0]] === 0) {
      playerPosition = _tmp;
      this.x = playerPosition[0] * perBlockX;
      this.y = playerPosition[1] * perBlockY;
    }
  }
}
