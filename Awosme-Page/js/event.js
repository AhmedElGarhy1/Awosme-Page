const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

// get the date of event
let eventDate = new Date("July 26, 2022 8:45:55").getTime();

let handler = setInterval(coolDown, 1000);

function coolDown() {
  let nowDate = new Date().getTime();
  let diff = eventDate - nowDate;
  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor(diff / 1000 / 60 / 60) % 24;
  let m = Math.floor(diff / 1000 / 60) % 60;
  let s = Math.floor(diff / 1000) % 60;
  if (d < 0) {
    d = 0;
    h = 0;
    m = 0;
    s = 0;
  }
  day.innerHTML = d;
  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
}
