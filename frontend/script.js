const canvas = document.getElementById("carpetCanvas");
const ctx = canvas.getContext("2d");

const iterationRange = document.getElementById("iterationRange");
const speedRange = document.getElementById("speedRange");

const iterationValue = document.getElementById("iterationValue");
const speedValue = document.getElementById("speedValue");
const currentStep = document.getElementById("currentStep");

const drawBtn = document.getElementById("drawBtn");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let animation = null;
let isRunning = false;

iterationValue.textContent = iterationRange.value;
speedValue.textContent = speedRange.value;

iterationRange.addEventListener("input", () => {
  iterationValue.textContent = iterationRange.value;
});

speedRange.addEventListener("input", () => {
  speedValue.textContent = speedRange.value;
});

function clearCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCarpet(x, y, size, depth) {
  if (depth === 0) return;

  let newSize = size / 3;

  ctx.fillStyle = "black";
  ctx.fillRect(x + newSize, y + newSize, newSize, newSize);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue;

      drawCarpet(
        x + i * newSize,
        y + j * newSize,
        newSize,
        depth - 1
      );
    }
  }
}

function generate() {
  stopAnimation();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let depth = parseInt(iterationRange.value);
  drawCarpet(0, 0, canvas.width, depth);

  currentStep.textContent = depth;
}

function animate() {
  stopAnimation();

  let depth = parseInt(iterationRange.value);
  let speed = parseInt(speedRange.value);

  let level = 0;
  let squares = [{ x: 0, y: 0, size: canvas.width }];

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  isRunning = true;

  function step() {
    if (!isRunning) return;

    if (level >= depth) {
      isRunning = false;
      return;
    }

    let next = [];

    for (let sq of squares) {
      let newSize = sq.size / 3;

      ctx.fillStyle = "black";
      ctx.fillRect(sq.x + newSize, sq.y + newSize, newSize, newSize);

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (i === 1 && j === 1) continue;

          next.push({
            x: sq.x + i * newSize,
            y: sq.y + j * newSize,
            size: newSize
          });
        }
      }
    }

    squares = next;
    level++;
    currentStep.textContent = level;

    animation = setTimeout(step, speed);
  }

  step();
}

function stopAnimation() {
  isRunning = false;
  if (animation) {
    clearTimeout(animation);
  }
}

function reset() {
  stopAnimation();
  clearCanvas();
  currentStep.textContent = 0;
}

drawBtn.addEventListener("click", generate);
startBtn.addEventListener("click", animate);
stopBtn.addEventListener("click", stopAnimation);
resetBtn.addEventListener("click", reset);

clearCanvas();