let seconds = 0;
const clockDOM = document.getElementById('clock');
const tickSound = document.getElementById('tick');
const minuteSound = document.getElementById('minute');

function updateClockDisplay() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  clockDOM.textContent = `${mins}:${secs}`;
}

function tick() {
  tickSound.currentTime = 0;
  tickSound.play();

  seconds++;
  updateClockDisplay();

  if (seconds % 60 === 0) {
    minuteSound.currentTime = 0;
    minuteSound.play();
  }
}

updateClockDisplay();
setInterval(tick, 1000);

