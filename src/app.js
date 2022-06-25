let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];

let currentDate = document.querySelector("#date");
let currentTime = document.querySelector("#clock");

currentDate.innerHTML = `${day}`;
currentTime.innerHTML = `${hours}:${minutes}`;
