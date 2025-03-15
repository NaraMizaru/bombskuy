const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const blocks = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const perBlockX = 64;
const perBlockY = 66.6;
let playerPosition = [1, 2];

const bg = new Background(0, 0, 705, canvas.height, "./assets/background.jpg");
const player = new Player(
  playerPosition[0] * perBlockX,
  playerPosition[1] * perBlockY,
  64,
  65,
  "./assets/char_down.png"
);

const animate = () => {
  window.requestAnimationFrame(animate);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  bg.draw();
  player.draw();
};

animate();

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") player.move("up");
  else if (e.key === "ArrowDown") player.move("down");
  else if (e.key === "ArrowLeft") player.move("left");
  else if (e.key === "ArrowRight") player.move("right");
});
