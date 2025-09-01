const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 400;

const catImage = new Image();
catImage.src = './assets/cat.png';

const spriteWidth = 32;
const spriteHeight = 32;
let playerState = 'idle';

let gameFrame = 0;
const staggerFrames = 14;
const spriteAnimations = [];
const animationStates = [
  { name: 'stand', frames: 4 },
  { name: 'sit', frames: 4 },
  { name: 'idle', frames: 8 },
  { name: 'walk', frames: 8 },
  { name: 'jump', frames: 8 },
  { name: 'void', frames: 14 },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };

  for (let j = 0; j < state.frames; j++) {
    let x = j * spriteWidth;
    let y = index * spriteHeight;
    frames.loc.push({ x, y });
  }
  spriteAnimations[state.name] = frames;
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;

  ctx.drawImage(catImage, frameX, frameY,
    spriteWidth, spriteHeight, 0, 0, spriteWidth * 1.2, spriteHeight * 1.2);

  gameFrame++;
  requestAnimationFrame(animate);
}

catImage.onload = () => {
  animate();
};
