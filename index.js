// eslint-disable-next-line import/extensions
import { weatherConditions } from "./weatherConditions.js";

function findColor(day) {
  const result = weatherConditions.find(({ code }) => code === day);
  return result.color;
}

function adjust(color, amount) {
  return `#${color
    .replace(/^#/, "")
    .replace(/../g, (color) =>
      `0${Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
        16
      )}`.substr(-2)
    )}`;
}

function printCurrentConditions(weatherData) {
  const windSpeed = document.querySelector(".windSpeed");
  const humidity = document.querySelector(".humidity");
  const uvIndex = document.querySelector(".uvIndex");
  const airQuality = document.querySelector(".airQuality");

  windSpeed.innerText = `Wind speed: ${weatherData.current.wind_mph} MPH ${weatherData.current.wind_dir}`;
  humidity.innerText = `Humidity: ${weatherData.current.humidity}%`;
  uvIndex.innerText = `UV index: ${weatherData.current.uv}`;
  airQuality.innerText = `Air quality: ${weatherData.current.air_quality["us-epa-index"]}`;
}

function printCurrentWeather(weatherData) {
  const city = document.querySelector(".city");
  const stateCountry = document.querySelector(".stateCountry");
  const time = document.querySelector(".time");
  const conditionIcon = document.querySelector(".conditionIcon");
  const conditionText = document.querySelector(".conditionText");
  const temperature = document.querySelector(".temperature");

  city.innerText = weatherData.location.name;
  if (weatherData.location.region) {
    stateCountry.innerText = `${weatherData.location.region}, ${weatherData.location.country}`;
  } else {
    stateCountry.innerText = `${weatherData.location.country}`;
  }
  const localTime = weatherData.location.localtime.slice(-5);
  if (localTime.slice(0, 2) < 12) {
    time.innerText = `${localTime} AM`;
  } else {
    time.innerText = `${localTime.slice(0, 2) - 12}:${localTime.slice(
      3,
      5
    )} PM`;
  }
  conditionIcon.src = weatherData.current.condition.icon;
  conditionIcon.style.display = "";
  conditionText.innerText = weatherData.current.condition.text;
  temperature.innerText = `${weatherData.current.temp_f}°F`;
}

function printForecast(weatherData) {
  const forecastDiv = document.querySelector(".forecast");
  forecastDiv.innerHTML = "<h1>Forecast</h1>";
  for (let i = 1; i < 3; i += 1) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "forecastDiv";
    dayDiv.style.display = "grid";
    const forecastData = weatherData.forecast.forecastday[i];

    dayDiv.style.background = findColor(forecastData.day.condition.code);

    const dateIcon = document.createElement("div");
    const day = document.createElement("p");
    day.className = "forecastDate";
    day.innerText = forecastData.date;
    dateIcon.appendChild(day);

    const conditionIcon = document.createElement("img");
    conditionIcon.src = forecastData.day.condition.icon;
    dateIcon.appendChild(conditionIcon);
    dayDiv.appendChild(dateIcon);

    const temps = document.createElement("div");
    const conditionText = document.createElement("h3");
    conditionText.innerText = forecastData.day.condition.text;
    conditionText.style.fontWeight = "bold";
    temps.appendChild(conditionText);

    const minTemp = document.createElement("p");
    minTemp.className = "minTemp";
    minTemp.innerText = `Low: ${forecastData.day.mintemp_f}`;
    temps.appendChild(minTemp);

    const maxTemp = document.createElement("p");
    maxTemp.className = "maxTemp";
    maxTemp.innerText = `High: ${forecastData.day.maxtemp_f}`;
    temps.appendChild(maxTemp);
    dayDiv.appendChild(temps);

    forecastDiv.append(dayDiv);
  }
}

function setBackgrounds(weatherData) {
  const container = document.querySelector(".container");
  const environment = document.querySelector(".environment");
  const weather = document.querySelector(".weather");
  const forecast = document.querySelector(".forecast");

  const today = weatherData.current.condition.code;
  const todayColor = findColor(today);
  container.style.background = todayColor;
  environment.style.background = adjust(todayColor, 50);
  weather.style.background = adjust(todayColor, 70);
  forecast.style.background = adjust(todayColor, 50);
}

async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=84ccd448f00f4d4591a210640231207&q=${location}&days=3&aqi=yes&alerts=yes`,
    { mode: "cors" }
  );
  const weatherData = await response.json();

  printCurrentWeather(weatherData);
  printForecast(weatherData);
  printCurrentConditions(weatherData);
  setBackgrounds(weatherData);

  console.log(weatherData);
}

const submitBtn = document.querySelector(".submitBtn");
const userInput = document.querySelector(".userInput");
submitBtn.addEventListener("click", () => {
  getWeatherData(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    submitBtn.click();
  }
});
