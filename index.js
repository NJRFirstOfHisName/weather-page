const userInput = document.getElementById("userInput");
const city = document.getElementById("city");
const stateCountry = document.getElementById("stateCountry");
const time = document.getElementById("time");
const conditionIcon = document.getElementById("conditionIcon");
const conditionText = document.getElementById("conditionText");
const temperature = document.getElementById("temperature");

async function getCurrentWeather(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=84ccd448f00f4d4591a210640231207&q=${location}&aqi=yes`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  city.innerText = weatherData.location.name;
  stateCountry.innerText = `${weatherData.location.region}, ${weatherData.location.country}`;
  const localTime = weatherData.location.localtime.slice(-5);
  if (localTime.slice(0, 2) < 12) {
    time.innerHTML = `${localTime} AM`;
  } else {
    time.innerHTML = `${localTime.slice(0, 2) - 12}:${localTime.slice(
      3,
      5
    )} PM`;
  }

  conditionIcon.src = weatherData.current.condition.icon;
  conditionText.innerHTML = weatherData.current.condition.text;

  temperature.innerText = `${weatherData.current.temp_f}°F`;

  console.log(weatherData);
}

// getCurrentWeather(userInput.value);
