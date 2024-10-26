// define variable to manipulate html elements
const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");
const year = document.getElementById("year");

// need to know the date of today
const date = new Date();

// assign today's date to correct variable
monthName.innerHTML = date.toLocaleString("en", {
    month: "long" // long -> fullName, short -> shortName, numeric -> number of month
});

dayName.innerHTML = date.toLocaleString("en", {
    weekday: "long"
});

dayNum.innerHTML = date.getDate();

year.innerHTML = date.getFullYear();
