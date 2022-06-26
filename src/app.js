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

function displayWeatherInformation(response) {
  console.log(response);

  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#dsc");
  let feelsLikeElement = document.querySelector("#feels-like");
  let windElement = document.querySelector("#wind");
  let humidityElement = document.querySelector("#humidity");
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  descriptionElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  humidityElement.innerHTML = `${Math.round(response.data.main.humidity)}%`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  feelsLikeElement.innerHTML = `${Math.round(response.data.main.feels_like)}°C`;
}

function search(city) {
  let apiKey = "5df8aef5bdd4c12142826a987f87c062";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherInformation);
}

function handleSubmit(event) {
  event.preventDefault();
  let submitCity = document.querySelector("#search-box");
  search(submitCity.value);
}

let form = document.querySelector("#search-button");
form.addEventListener("click", handleSubmit);
search("Dublin,ie");
