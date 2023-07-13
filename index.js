// const userInput = document.getElementById("userInput");

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
  const weather = document.querySelector(".weather");
  const city = document.querySelector(".city");
  const stateCountry = document.querySelector(".stateCountry");
  const time = document.querySelector(".time");
  const conditionIcon = document.querySelector(".conditionIcon");
  const conditionText = document.querySelector(".conditionText");
  const temperature = document.querySelector(".temperature");

  city.innerText = weatherData.location.name;
  stateCountry.innerText = `${weatherData.location.region}, ${weatherData.location.country}`;
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
  conditionText.innerText = weatherData.current.condition.text;
  temperature.innerText = `${weatherData.current.temp_f}°F`;

  weather.style.display = "";
}

function printForecast(weatherData) {
  const forecastDiv = document.querySelector(".forecast");
  for (let i = 1; i < 3; i += 1) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "forecastDiv";
    const forecastData = weatherData.forecast.forecastday[i];

    const day = document.createElement("p");
    day.className = "forecastDate";
    day.innerText = forecastData.date;
    dayDiv.appendChild(day);

    const condition = document.createElement("div");
    const conditionIcon = document.createElement("img");
    conditionIcon.src = forecastData.day.condition.icon;
    condition.appendChild(conditionIcon);
    const conditionText = document.createElement("p");
    conditionText.innerText = forecastData.day.condition.text;
    condition.appendChild(conditionText);
    dayDiv.appendChild(condition);

    const minTemp = document.createElement("p");
    minTemp.className = "minTemp";
    minTemp.innerText = forecastData.day.mintemp_f;
    dayDiv.appendChild(minTemp);

    const maxTemp = document.createElement("p");
    maxTemp.className = "maxTemp";
    maxTemp.innerText = forecastData.day.maxtemp_f;
    dayDiv.appendChild(maxTemp);

    const avgTemp = document.createElement("p");
    avgTemp.className = "avgTemp";
    avgTemp.innerText = forecastData.day.avgtemp_f;
    dayDiv.appendChild(avgTemp);

    forecastDiv.append(dayDiv);
  }
}

async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=84ccd448f00f4d4591a210640231207&q=${location}&days=3&aqi=yes`,
    { mode: "cors" }
  );
  const weatherData = await response.json();

  console.log(weatherData);

  printCurrentWeather(weatherData);
  printForecast(weatherData);
  printCurrentConditions(weatherData);
}

getWeatherData(80525);
