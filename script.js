document.addEventListener('DOMContentLoaded', () => {
    let startTime, updatedTime, difference, timerInterval;
    let running = false;
  
    const timeDisplay = document.getElementById('time');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');
  
    startBtn.addEventListener('click', () => {
      if (!running) {
        running = true;
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTime, 1000);
      }
    });
  
    stopBtn.addEventListener('click', () => {
      if (running) {
        running = false;
        clearInterval(timerInterval);
        difference = new Date().getTime() - startTime;
      }
    });
  
    resetBtn.addEventListener('click', () => {
      running = false;
      clearInterval(timerInterval);
      difference = 0;
      timeDisplay.textContent = "00:00";
    });
  
    function updateTime() {
        updatedTime = new Date().getTime() - startTime;
        let hours = Math.floor((updatedTime / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((updatedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((updatedTime / 1000) % 60);  // Add seconds
        
        // Ensure hours, minutes, and seconds are displayed with two digits
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;  // Format seconds
      
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;  // Include seconds in the display
      }
      
  });
  