function getNextSundayAtNoon() {
  const now = new Date();
  const sunday = new Date();
  
  // Calculate the next Sunday
  sunday.setDate(now.getDate() + (7 - now.getDay()) % 7);
  
  // Set time to 12 PM
  sunday.setHours(12, 0, 0, 0);
  
  // If today is Sunday and it's already past 12 PM, move to the next Sunday
  if (now.getDay() === 0 && now > sunday) {
    sunday.setDate(sunday.getDate() + 7);
  }
  
  return sunday;
}

function updateCountdown() {
  const now = new Date();
  const nextSunday = getNextSundayAtNoon();
  const timeRemaining = nextSunday - now;

  // Calculate remaining time
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update DOM elements
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Automatically update every second
  setTimeout(updateCountdown, 1000);
}

// Start the countdown
updateCountdown();


window.onload = function () {
    const confettiContainer = document.getElementById("confetti-container");
  
    if (!confettiContainer) {
      console.error("Confetti container not found!");
      return;
    }
  
    // Create a canvas for confetti
    const confettiCanvas = document.createElement("canvas");
    confettiCanvas.style.position = "absolute";
    confettiCanvas.style.top = "0";
    confettiCanvas.style.left = "0";
    confettiCanvas.style.width = "100%";
    confettiCanvas.style.height = "100%";
    confettiCanvas.style.pointerEvents = "none";
    confettiContainer.style.position = "relative"; // Ensures confetti is scoped to this container
    confettiContainer.appendChild(confettiCanvas);
  
    const jsConfetti = new JSConfetti({ canvas: confettiCanvas });
  
    const duration = 30000; // 30 seconds
    const startTime = localStorage.getItem("confettiStartTime");
    const currentTime = Date.now();
  
    if (!startTime || currentTime - startTime > duration) {
      localStorage.setItem("confettiStartTime", currentTime);
  
      const intervalId = setInterval(() => {
        jsConfetti.addConfetti({
          confettiRadius: 4,
          confettiNumber: 200,
        });
      }, 1000);
  
      setTimeout(() => {
        clearInterval(intervalId);
        localStorage.removeItem("confettiStartTime");
        confettiContainer.removeChild(confettiCanvas);
      }, duration);
    }
  };
  