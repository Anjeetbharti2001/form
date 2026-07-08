function updateClock(){



const now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

const clock = document.querySelector(".clock");

clock.innerText = `${hour}:${minutes}:${seconds}`;

console.log(now);
console.log(hour, minutes, seconds);
}

updateClock();
setInterval(updateClock, 1000);
