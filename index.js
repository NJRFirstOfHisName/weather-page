const userInput = document.getElementById("userInput");
const weather = document.querySelector(".weather");
const city = document.querySelector(".city");
const stateCountry = document.querySelector(".stateCountry");
const time = document.querySelector(".time");
const conditionIcon = document.querySelector(".conditionIcon");
const conditionText = document.querySelector(".conditionText");
const temperature = document.querySelector(".temperature");
const windSpeed = document.querySelector(".windSpeed");
const humidity = document.querySelector(".humidity");
const uvIndex = document.querySelector(".uvIndex");
const airQuality = document.querySelector(".airQuality");

async function printCurrentConditions(forecastData) {
  windSpeed.innerText = `Wind speed: ${forecastData.current.wind_mph} MPH ${forecastData.current.wind_dir}`;
  humidity.innerText = `Humidity: ${forecastData.current.humidity}%`;
  uvIndex.innerText = `UV index: ${forecastData.current.uv}`;
  airQuality.innerText = `Air quality: ${forecastData.current.air_quality["us-epa-index"]}`;
}
async function printCurrentWeather(forecastData) {
  city.innerText = forecastData.location.name;
  stateCountry.innerText = `${forecastData.location.region}, ${forecastData.location.country}`;
  const localTime = forecastData.location.localtime.slice(-5);
  if (localTime.slice(0, 2) < 12) {
    time.innerText = `${localTime} AM`;
  } else {
    time.innerText = `${localTime.slice(0, 2) - 12}:${localTime.slice(
      3,
      5
    )} PM`;
  }

  conditionIcon.src = forecastData.current.condition.icon;
  conditionText.innerText = forecastData.current.condition.text;
  temperature.innerText = `${forecastData.current.temp_f}°F`;

  weather.style.display = "";
}

async function printForecast(location) {}

async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=84ccd448f00f4d4591a210640231207&q=${location}&days=3&aqi=yes`,
    { mode: "cors" }
  );
  const forecastData = await response.json();

  printCurrentWeather(forecastData);
  printForecast(forecastData);
  printCurrentConditions(forecastData);

  console.log(forecastData);
}

getWeatherData(80525);
