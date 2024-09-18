function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function changeCity(event) {
  event.preventDefault();
  event.stopPropagation();
  let cityInputElement = document.querySelector("#search-city");
  let city = cityInputElement.value;
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);

  currentCity.innerHTML = citySearch.value;
}

let currentDate = new Date();

let dateChange = document.querySelector(".date");

let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hour < 10) {
  hour = `0${hour}`;
}
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = weekdays[currentDate.getDay()];

dateChange.innerHTML = `${weekday} ${hour}:${minutes}, moderate rain <br /> Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>`;

let city = document.querySelector("#search-form");
city.addEventListener("submit", changeCity);
