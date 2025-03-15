const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const bg = new Background(0, 0, 705, canvas.height, "./assets/background.jpg");

const animate = () => {
  window.requestAnimationFrame(animate);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  bg.draw();
};

animate();
