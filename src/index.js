import format from "date-fns/format";
import "./style.css";
import parseISO from "date-fns/parseISO";
import { weatherConditions } from "./weatherConditions";

// Searches weatherConditions.js to find the appropriate background color for the weather.
function findColor(day) {
  const result = weatherConditions.find(({ code }) => code === day);
  return result.color;
}

// Stolen from Stack Exhange, allows the lightening or darkening of a hex color by percentage. Used to generate background colors.
function adjust(color, amount) {
  return `#${color
    .replace(/^#/, "")
    .replace(/../g, (color) =>
      `0${Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
        16
      )}`.substr(-2)
    )}`;
}

// Prints all fields in the center "Conditions" card.
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

// Prints all fields in the "Today's Weather" card
function printCurrentWeather(weatherData) {
  const city = document.querySelector(".city");
  const stateCountry = document.querySelector(".stateCountry");
  const time = document.querySelector(".time");
  const conditionIcon = document.querySelector(".conditionIcon");
  const conditionText = document.querySelector(".conditionText");
  const temperature = document.querySelector(".temperature");
  const feelsLike = document.querySelector(".feelsLike");
  const todayDate = document.querySelector(".todayDate");

  // Not all results from the API have a 'region' field, this ensures there are no hanging commas if region is empty
  city.innerText = weatherData.location.name;
  if (weatherData.location.region) {
    stateCountry.innerText = `${weatherData.location.region}, ${weatherData.location.country}`;
  } else {
    stateCountry.innerText = `${weatherData.location.country}`;
  }

  // Uses date-fn to make the date prettier.
  const today = weatherData.location.localtime.slice(0, 10);
  todayDate.innerText = format(parseISO(today), "eee, MMMM do yyyy");

  // First checks whether it's AM or PM, then checks whether it's noon or midnight. Probably could have done that the other way around.
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

// Creates divs for and prints forecast cards.
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

// Checks the current weather and fetches the appropriate background color from weatherConditions.js, then brigtens the color for use in the backgrounds of cards.
function setBackgrounds(weatherData) {
  const container = document.querySelector(".container");
  const environment = document.querySelector(".environment");
  const weather = document.querySelector(".weather");
  const forecast = document.querySelector(".forecast");

  // Fetches the background color if it's daytime, otherwise sets it to the night color
  let todayColor;
  if (weatherData.current.is_day) {
    todayColor = findColor(weatherData.current.condition.code);
    container.style.color = "black";
  } else {
    todayColor = "#0b0f38";
    container.style.color = "white";
    const forecastDivs = document.querySelectorAll(".forecastDiv");
    forecastDivs.forEach((div) => {
      div.style.color = "black";
    });
  }

  container.style.background = todayColor;
  environment.style.background = adjust(todayColor, 50);
  weather.style.background = adjust(todayColor, 70);
  forecast.style.background = adjust(todayColor, 50);
}

// When there is a weather alert, this is used by the button that's generated to show or hide the extended details of the alert.
function toggleHidden() {
  const hiddenDiv = document.querySelector(".hiddenDiv");
  const hidden = hiddenDiv.getAttribute("hidden");
  if (hidden) {
    hiddenDiv.removeAttribute("hidden");
  } else {
    hiddenDiv.setAttribute("hidden", "hidden");
  }
}

// If there is a weather alert, this is called to display the information at the bottom of 'Today's Weather'. By default only the headline and button aren't hidden.
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

  // Not all alerts have an instruction property
  if (alertData.instruction) {
    const instruction = document.createElement("p");
    instruction.innerText = alertData.instruction;
    hiddenDiv.appendChild(instruction);
  }

  alertDiv.appendChild(hiddenDiv);
  const weather = document.querySelector(".weather");
  weather.appendChild(alertDiv);
}

// Calls the API and returns the result as a promise. The only errors that get caught here are issues with the API call, not the response.
async function callApi(location) {
  let response;
  try {
    response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=84ccd448f00f4d4591a210640231207&q=${location}&days=4&aqi=yes&alerts=yes`,
      { mode: "cors" }
    );
  } catch (error) {
    throw new Error("Error: ", error);
  }
  return response;
}

// Main function that is called when the "Get Weather" button is pressed.
async function getWeatherData(location) {
  const invalid = document.querySelector(".invalid");
  const hidden = invalid.getAttribute("hidden");

  // Calls the API. If there is a problem with the response, un-hides a message showing the location was invalid. Otherwise calls each of the printing functions.
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

    // First checks to see if there is an existing alert on the page and removes it. Then if, the new location has an alert, calls the function to print it.
    const alertDiv = document.querySelector(".weatherAlert");
    if (alertDiv) {
      alertDiv.remove();
    }
    if (weatherData.alerts.alert[0]) {
      printAlert(weatherData.alerts.alert[0]);
    }

    // If the Invalid Location message is visible, hides it.
    if (!hidden) {
      invalid.setAttribute("hidden", "hidden");
    }
  }
}

// Event listeners for user input
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

// On page load, gets local weather using user's IP address.
getWeatherData("auto:ip");
