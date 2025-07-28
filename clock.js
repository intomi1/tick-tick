// clock.js
let seconds = 0;
const clockDOM = document.getElementById('clock');
const tickSound = document.getElementById('tick');
const minuteSound = document.getElementById('minute');

// Start in muted state
let muted = true;

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateClockDisplay() {
  const mins = pad(Math.floor(seconds / 60));
  const secs = pad(seconds % 60);
  clockDOM.textContent = `${mins}:${secs}`;
}

function playSound(audio) {
  if (muted) return;
  audio.currentTime = 0;
  audio.play();
}

function tick() {
  playSound(tickSound);

  seconds++;
  updateClockDisplay();

  if (seconds % 60 === 0) {
    playSound(minuteSound);
  }
}

// Export a function to toggle mute from the HTML
export function toggleMute() {
  muted = !muted;
  return muted;
}

// Export a getter for the current mute state
export function isMuted() {
  return muted;
}

// Initialize the display and start the timer
updateClockDisplay();
setInterval(tick, 1000);
