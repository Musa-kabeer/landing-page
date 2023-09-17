"use strict";
const form = document.querySelector("form");
const dateEl = document.querySelector("h1");
const greetingEl = document.querySelector("h3");

const getDate = () => {
  const date = new Date();

  const hr = `${date.getHours()}`.padStart(2, 0);
  const min = `${date.getMinutes()}`.padStart(2, 0);
  const sec = `${date.getSeconds()}`.padStart(2, 0);

  const PM_AM = hr >= 12 ? "PM" : "AM";

  const hour = 22;
  let time;

  if (hr >= 1 && hr < 12) {
    time = "Good morning";
  }

  if (hr >= 12 && hr < 17) {
    time = "Good Afternoon";
  }

  if (hr >= 17 && hr < 22) {
    time = "Good Evening";
  }

  if (hr >= 22) {
    time = "Good Night";
  }

  dateEl.textContent = `${hr}:${min}:${sec} ${PM_AM}`;
  greetingEl.textContent = time;
};

getDate();
setInterval(getDate, 1000);

const goal = JSON.parse(localStorage.getItem("land-page"))?.at(0);
console.log(goal);
if (goal) {
  document.querySelector(".workout").classList.remove("hidden");
  document.querySelector("form").classList.add("hidden");
  document.querySelector(".workout").textContent = `- ${goal.goal}`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = document.querySelector("input").value;

  document.querySelector(".workout").classList.remove("hidden");
  document.querySelector("form").classList.add("hidden");
  document.querySelector(".workout").textContent = `- ${value}`;

  localStorage.setItem("land-page", JSON.stringify([{ goal: value }]));
});
