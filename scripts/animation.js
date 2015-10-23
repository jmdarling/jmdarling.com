var welcomePanel = document.getElementById('welcome-panel');
var degreeOffset = 0;

var step = function step() {
    welcomePanel.style.background = 'background linear-gradient(' + degreeOffset++ + 'deg, #e484be, #83a2b1)';
    requestAnimationFrame(step);
};

requestAnimationFrame(step);