let timer;
let cs = 0, s = 0, m = 0, h = 0; // cs = centiseconds (10ms)
let running = false;

const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("btn1");
const pauseButton = document.getElementById("btn2");
const resetButton = document.getElementById("btn3");

function updateTime() {
  cs++;
  if (cs === 100) { cs = 0; s++; }
  if (s === 60) { s = 0; m++; }
  if (m === 60) { m = 0; h++; }

  timeDisplay.textContent =
    `${String(h).padStart(2,'0')} : ` +
    `${String(m).padStart(2,'0')} : ` +
    `${String(s).padStart(2,'0')} : ` +
    `${String(cs).padStart(2,'0')}`;
}

startButton.addEventListener("click", () => {
  if (!running) {
    running = true;
    timer = setInterval(updateTime, 10);
  }
});

pauseButton.addEventListener("click", () => {
  running = false;
  clearInterval(timer);
});

resetButton.addEventListener("click", () => {
  running = false;
  clearInterval(timer);
  cs = s = m = h = 0;
  timeDisplay.textContent = "00 : 00 : 00 : 00";
});
