const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
// 0-11, the index always starts with 0

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const endDate = document.querySelector(".endDate");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// Enter new dates here:
let futureDate = new Date(2022, 11, 18, 9, 0);
// Date format (Year, Month, Day, Hour, Min)
// The year and the month are on a 0-start index basis.
// Month: 0 = Jan, 1 = Feb, 2 = Mar, etc.
// Similarly, Day: 0 = Mon, 1 = Tue, 2 = Wed, etc.

// This formula is to add 10 days to whatever the current date, and set the time to 11:30 AM.
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = `${futureDate.getMinutes()}`.padStart(2, 0);
// padStart(max length of characters, character to be inserted at the start)

let month = futureDate.getMonth();
month = months[month];
// access month from arrays

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

endDate.textContent = `time until ${weekday}, ${date} ${month} ${year} at ${hours}:${minutes} AM`;

// future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;

    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let mins = Math.floor((t % oneHour) / oneMin);
    let secs = Math.floor((t % oneMin) / 1000);

    // set values array;

    const values = [days, hours, mins, secs];

    function format(item) {
        if (item < 10) {
            return (items = `0${item}`);
        }
    }

    items.forEach(function (item, index) {
        item.innerHTML = values[index];
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Finished.</h4>`;
    }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
