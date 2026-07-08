function updateClock(){

const now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let period = hour >= 12? "PM" : "AM";

hour = hour % 12;
hour = hour || 12;

hour = String(hour).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");

const clock = document.querySelector(".clock");

clock.innerText = `${hour}:${minutes}:${seconds} ${period}`;

console.log(now);
console.log(hour, minutes, seconds);
}

updateClock();
setInterval(updateClock, 1000);
