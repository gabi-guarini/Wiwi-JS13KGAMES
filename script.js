const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 600;

const catVoidImage = new Image();
catVoidImage.src = './assets/cat_void.png';
const spriteWidth = 32;
const spriteHeight = 32;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let staggerFrames = 15;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(catVoidImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth * 1.5, spriteHeight * 1.5);
  if (gameFrame % staggerFrames === 0) {
    frameX < 14 ? frameX++ : frameX = 0;
  }
  gameFrame++;
  requestAnimationFrame(animate);
}

catVoidImage.onload = () => {
  animate();
};
