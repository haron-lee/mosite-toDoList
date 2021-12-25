"use strick";

const calendarText = document.querySelector(".calendar span");
const dateTest = new Date(Date.UTC(2021, 11, 24));

function getCalendar() {
  const calendar = new Date();
  let options = { month: "long" };
  const WEEKDAY = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const week = WEEKDAY[calendar.getDay()];
  const year = calendar.getFullYear();
  const month = calendar.toLocaleDateString("en-Us", options);
  const date = calendar.getDate();

  calendarText.innerText = `Today is ${week}, ${month} ${date}, ${year}`;
}

getCalendar();
