const clock = document.getElementById("clock");
const alarmInput = document.getElementById("alarmTime");
const status = document.getElementById("status");
const root = document.querySelector(':root');

let alarmTime = null;
let alarmTriggered = false;
let lastHour = new Date().getHours(); // Store the hour when the page loads

function getRandomColor() {
  const colors = ['#00fff2', '#ff00ff', '#ffff00', '#00ff00', '#ff4500', '#8a2be2'];
  let newColor = colors[Math.floor(Math.random() * colors.length)];
  return newColor;
}

function updateClock() {
  const now = new Date();
  
  // Format time with padding (as seen in your screenshot's DevTools)
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${h}:${m}:${s}`;
  const shortTimeString = `${h}:${m}`; // For alarm comparison

  clock.textContent = timeString;

  // --- HOUR CHANGE LOGIC ---
  if (now.getHours() !== lastHour) {
    const newColor = getRandomColor();
    root.style.setProperty('--clock-color', newColor); // Updates the CSS variable
    lastHour = now.getHours(); // Update the tracker
    console.log("Hour changed! New color applied.");
  }

  /* Check alarm */
  if (alarmTime === shortTimeString && !alarmTriggered) {
    alert("⏰ Alarm Time!");
    alarmTriggered = true;
  }
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Run immediately

/* Set alarm */
document.getElementById("setAlarm").addEventListener("click", () => {
  if (alarmInput.value === "") {
    status.textContent = "Please set a time.";
    return;
  }
  alarmTime = alarmInput.value;
  alarmTriggered = false;
  status.textContent = "Alarm set for " + alarmTime;
});

/* Clear alarm */
document.getElementById("clearAlarm").addEventListener("click", () => {
  alarmTime = null;
  status.textContent = "Alarm cleared.";
});