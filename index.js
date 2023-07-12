const city = document.getElementById("city");
const stateZip = document.getElementById("stateZip");
const country = document.getElementById("country");
const time = document.getElementById("time");
const condition = document.getElementById("condition");
const temperature = document.getElementById("temperature");

async function getCurrentWeather(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=84ccd448f00f4d4591a210640231207&q=${location}&aqi=yes`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  city.innerText = weatherData.location.name;

  console.log(weatherData);
  return weatherData;
}

const currentWeather = getCurrentWeather(80525);
