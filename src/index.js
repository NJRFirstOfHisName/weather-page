import format from "date-fns/format";
import "./style.css";
// eslint-disable-next-line import/extensions
import parseISO from "date-fns/parseISO";
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
  const pressure = document.querySelector(".pressure");
  const precipitation = document.querySelector(".precipitation");

  windSpeed.innerText = `Wind speed: ${weatherData.current.wind_mph} MPH ${weatherData.current.wind_dir}`;
  humidity.innerText = `Humidity: ${weatherData.current.humidity}%`;
  uvIndex.innerText = `UV index: ${weatherData.current.uv}`;
  airQuality.innerText = `Air quality: ${weatherData.current.air_quality["us-epa-index"]}`;
  pressure.innerText = `Atmospheric pressure: ${weatherData.current.pressure_in} inHg.`;
  precipitation.innerText = `Expected precipitation: ${weatherData.current.precip_in}"`;
}

function printCurrentWeather(weatherData) {
  const city = document.querySelector(".city");
  const stateCountry = document.querySelector(".stateCountry");
  const time = document.querySelector(".time");
  const conditionIcon = document.querySelector(".conditionIcon");
  const conditionText = document.querySelector(".conditionText");
  const temperature = document.querySelector(".temperature");
  const feelsLike = document.querySelector(".feelsLike");
  const todayDate = document.querySelector(".todayDate");

  city.innerText = weatherData.location.name;
  if (weatherData.location.region) {
    stateCountry.innerText = `${weatherData.location.region}, ${weatherData.location.country}`;
  } else {
    stateCountry.innerText = `${weatherData.location.country}`;
  }

  const today = weatherData.location.localtime.slice(0, 10);
  todayDate.innerText = format(parseISO(today), "eee, MMMM do yyyy");

  const localTime = weatherData.location.localtime.slice(-5);
  const hour = localTime.slice(0, 2);
  const minute = localTime.slice(3, 5);
  if (hour < 12) {
    if (hour > 0) {
      time.innerText = `${localTime} AM`;
    } else {
      time.innerText = `12:${minute} AM`;
    }
  } else if (hour - 12 > 0) {
    time.innerText = `${hour - 12}:${minute} PM`;
  } else {
    time.innerText = `12:${minute} PM`;
  }

  conditionIcon.src = weatherData.current.condition.icon;
  conditionIcon.style.display = "";
  conditionText.innerText = weatherData.current.condition.text;
  temperature.innerText = `${weatherData.current.temp_f}°F`;
  feelsLike.innerText = `Feels like ${Math.trunc(
    weatherData.current.feelslike_f
  )}°F`;
}

function printForecast(weatherData) {
  const forecastDiv = document.querySelector(".forecast");
  forecastDiv.innerHTML = "<h1>Forecast</h1>";
  for (let i = 1; i < 4; i += 1) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "forecastDiv";
    dayDiv.style.display = "grid";
    const forecastData = weatherData.forecast.forecastday[i];

    dayDiv.style.background = findColor(forecastData.day.condition.code);

    const dateIcon = document.createElement("div");
    const day = document.createElement("p");
    day.className = "forecastDate";
    day.innerText = format(parseISO(forecastData.date), "eee, MMM do");
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

function toggleHidden() {
  const hiddenDiv = document.querySelector(".hiddenDiv");
  const hidden = hiddenDiv.getAttribute("hidden");
  if (hidden) {
    hiddenDiv.removeAttribute("hidden");
  } else {
    hiddenDiv.setAttribute("hidden", "hidden");
  }
}

function printAlert(alertData) {
  const alertDiv = document.createElement("div");
  alertDiv.className = "weatherAlert";

  const headline = document.createElement("h2");
  headline.innerText = alertData.headline;
  alertDiv.appendChild(headline);

  const alertBtn = document.createElement("button");
  alertBtn.className = "alertBtn";
  alertBtn.innerText = "Show More";
  alertBtn.onclick = toggleHidden;
  alertDiv.appendChild(alertBtn);

  const hiddenDiv = document.createElement("div");
  hiddenDiv.className = "hiddenDiv";
  hiddenDiv.setAttribute("hidden", "hidden");

  const description = document.createElement("p");
  description.innerText = alertData.desc;
  hiddenDiv.appendChild(description);

  if (alertData.instruction) {
    const instruction = document.createElement("p");
    instruction.innerText = alertData.instruction;
    hiddenDiv.appendChild(instruction);
  }

  alertDiv.appendChild(hiddenDiv);
  const currentWeather = document.querySelector(".currentWeather");
  currentWeather.appendChild(alertDiv);
}

async function callApi(location) {
  let response;
  try {
    response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=84ccd448f00f4d4591a210640231207&q=${location}&days=4&aqi=yes&alerts=yes`,
      { mode: "cors" }
    );
  } catch (error) {
    console.log("Error: ", error);
  }
  return response;
}

async function getWeatherData(location) {
  const invalid = document.querySelector(".invalid");
  const hidden = invalid.getAttribute("hidden");

  const apiData = await callApi(location);
  if (!apiData.ok) {
    if (hidden) {
      invalid.removeAttribute("hidden");
    }
  } else {
    const weatherData = await apiData.json();

    printCurrentWeather(weatherData);
    printForecast(weatherData);
    printCurrentConditions(weatherData);
    setBackgrounds(weatherData);

    const alertDiv = document.querySelector(".weatherAlert");
    if (alertDiv) {
      alertDiv.remove();
    }

    if (weatherData.alerts.alert[0]) {
      printAlert(weatherData.alerts.alert[0]);
    }

    if (!hidden) {
      invalid.setAttribute("hidden", "hidden");
    }

    console.log(weatherData);
  }
}

const submitBtn = document.querySelector(".submitBtn");
const userInput = document.querySelector(".userInput");
submitBtn.addEventListener("click", () => {
  if (userInput.value) {
    getWeatherData(userInput.value);
    userInput.value = "";
  }
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    submitBtn.click();
  }
});
