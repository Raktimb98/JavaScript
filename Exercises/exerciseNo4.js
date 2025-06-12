//? Make a clock using setInterval method. UI matters
const clockDiv = document.createElement('div');
clockDiv.style.fontSize = '2em';
clockDiv.style.fontFamily = 'monospace';
clockDiv.style.textAlign = 'center';
clockDiv.style.marginTop = '50px';
document.body.appendChild(clockDiv);

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockDiv.textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);