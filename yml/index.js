let timer;
    let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
    let running = false;

    const timeDisplay = document.getElementById("time");
    const startButton = document.getElementById("btn1");
    const pauseButton = document.getElementById("btn2");
    const resetButton = document.getElementById("btn3");

    function updateTime() {
      milliseconds += 10;
      if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      timeDisplay.textContent =
        `${String(hours).padStart(2, '0')} : ` +
        `${String(minutes).padStart(2, '0')} : ` +
        `${String(seconds).padStart(2, '0')} : ` +
        `${String(milliseconds / 10).padStart(2, '0')}`;
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
      milliseconds = 0;
      seconds = 0;
      minutes = 0;
      hours = 0;
      timeDisplay.textContent = "00 : 00 : 00 : 00"; // reset display
    });