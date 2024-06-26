// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

// ***********setTimeout*********** \\
// const id = setTimeout(() => {
//   console.log("Time is Over");
// }, 1000);
// // Видалення Timeout за необхідністю
// console.log(id);

// clearTimeout(id);

// Можливість передати параметри для колбеку
// const id = setTimeout(
//   (name, country) => {
//     console.log(`Hello my name is ${name}, and i'm from ${country}`);
//   },
//   3000,
//   "Dima",
//   "Ukraine"
// );
// ***********setInterval*********** \\
// const qwery = setInterval(() => {
//   console.log("setInterval");
// }, 1000);
// // Видалення Timeout за необхідністю
// clearInterval(qwery);

// // Можливість передати параметри для колбеку
// const id = setInterval(
//   (name, country) => {
//     console.log(`Hello my name is ${name}, and i'm from ${country}`);
//   },
//   1000,
//   "Dima",
//   "Ukraine"
// );

// clearInterval(id);

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд
const elements = {
  content: document.querySelector(".js-content"),
  text: document.querySelector(".js-text"),
};

let counter = 10;

elements.text.textContent = `Залишилось ${counter} секунд`;

const id = setInterval(() => {
  counter -= 1;

  if (!counter) {
    clearInterval(id);
    elements.content.style.display = "none";
  }

  elements.text.textContent = `Залишилось ${counter} секунд`;
}, 1000);

// ***********Синхронний та асинхронний JavaScript*********** \\
// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("3");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// console.time("Test");

// for (let i = 0; i < 100000; i += 1) {
//   console.log(i);
// }

// console.timeEnd("Test");
// ***********Class Date*********** \\

// const di = setInterval(() => {
//   const currentDate = new Date();
//   console.log(currentDate);

//   const targetDate = new Date("09/05/2024 3:00 pm");
//   console.log(targetDate);

//   const diff = targetDate - currentDate;

//   console.log(diff);
// }, 1000);
// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const elements = {
  day: document.querySelector(".date-day"),
  date: document.querySelector('.date'),
  month: 
}