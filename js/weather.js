"use strick";

const API_KEY = "995e8ef20ddbb04958f309c8dbebc038";

function getWeatherCurrent(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const city = document.querySelector(".weather-text span");
      const weather = document.querySelector(".weather-main");
      const weatherTemp = document.querySelector(".weather-temp span");
      const weatherIconImg = document.querySelector(".weather-icon img");

      const weatherIcon = data.weather[0].icon;
      const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      city.innerText = data.name;
      weatherIconImg.setAttribute("src", weatherIconUrl);
      weather.innerText = data.weather[0].main;
      weatherTemp.innerText = `${Math.floor(data.main.temp)}°`;
    });
}

function getWeatherForecast(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherForecastBox = document.querySelectorAll(
        ".weather-forecast_row"
      );
      const today = new Date();
      const forecastData = data.daily;

      for (i = 1; i < forecastData.length; i++) {
        const forecastBox = weatherForecastBox[i - 1];
        const dateBox = forecastBox.querySelector(".date");
        const iconBox = forecastBox.querySelector(".icon");
        const tempBox = forecastBox.querySelector(".temp");
        const mainBox = forecastBox.querySelector(".main");

        const date = document.createElement("span");
        const icon = document.createElement("img");
        const temp = document.createElement("span");
        const main = document.createElement("span");

        today.setDate(today.getDate() + 1);
        date.innerText = `${today.getMonth() + 1}/${today.getDate()}`;
        icon.src = `http://openweathermap.org/img/wn/${forecastData[i].weather[0].icon}.png`;
        temp.innerText = `${forecastData[i].temp.min.toFixed()}°/${forecastData[
          i
        ].temp.max.toFixed()}°`;
        main.innerText = `${forecastData[i].weather[0].main}`;

        dateBox.appendChild(date);
        iconBox.appendChild(icon);
        tempBox.appendChild(temp);
        mainBox.appendChild(main);
      }
    });
}

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`;

  getWeatherCurrent(currentUrl);
  getWeatherForecast(forecastUrl);
};

const onGeoError = () => {
  alert("I can't find you");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
