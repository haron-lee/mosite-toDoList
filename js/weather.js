"use strick";

const API_KEY = "995e8ef20ddbb04958f309c8dbebc038";

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather-text span");
      const weather = document.querySelector(".weather-main span:first-child");
      const weatherTemp = document.querySelector(
        ".weather-main span:last-child"
      );
      const weatherIconImg = document.querySelector(".weather-icon img");
      const weatherIcon = data.weather[0].icon;
      const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      city.innerText = data.name;
      weatherIconImg.setAttribute("src", weatherIconUrl);
      weather.innerText = data.weather[0].main;
      weatherTemp.innerText = `${Math.floor(data.main.temp)}°`;
    });
};

const onGeoError = () => {
  alert("I can't find you");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
