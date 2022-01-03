"use strick";

const API = "995e8ef20ddbb04958f309c8dbebc038";

function getDayArray() {
  const dayArray = [];
  const days = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };
  for (let i = 1; i <= 5; i++) {
    const now = new Date();
    let index = now.getDay() + i;
    index = index > 4 ? index - 5 : index;
    dayArray.push(days[index]);
  }
  return dayArray;
}

function getWeatherForecast(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherForecast = document.querySelector(".weather-forecast_row");
      const weatherData = data.daily;
      const dayArray = getDayArray();
      const today = new Date();

      for (let i = 1; i < weatherForecast.length; i++) {
        const weatherForecastBox = weatherForecast[i - 1];
        const dateBox = weatherForecastBox.querySelector(".date");
        const dayBox = weatherForecastBox.querySelector(".day");
        const iconBox = weatherForecastBox.querySelector(".icon");
        const tempBox = weatherForecastBox.querySelector(".temp");
        const mainBox = weatherForecastBox.querySelector(".main");

        const date = document.createElement("span");
        const day = document.createElement("span");
        const icon = document.createElement("img");
        const temp = document.createElement("span");
        const main = document.createElement("span");

        today.setDate(today.getDate() + 1);
        date.innerText = `${today.getMonth() + 1}/${today.getDate()}`;
        day.innerText = dayArray[i - 1];
        icon.src = `http://openweathermap.org/img/wn/${weatherData[i].weather[0].icon}.png`;
        temp.innerHTML = `${weatherData[i].temp}<span>°</span>`;
        main.innerText = `${weatherData[i].weather[0].main}`;

        dateBox.appendChild(date);
        dayBox.appendChild(day);
        iconBox.appendChild(icon);
        tempBox.appendChild(temp);
        mainBox.appendChild(main);
      }
    });
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${API}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      getWeatherForecast(url);
    });
}

function handleGeoError() {
  alert("I can't find you");
}

navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
