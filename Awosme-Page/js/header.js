const bars = document.querySelector(".bars");
const header = document.querySelector(".header");
const icons = document.querySelectorAll(".nav__bar li");
const mega = document.querySelector(".mega-section");
const other = document.getElementById("other");
const links = document.querySelectorAll(".links li");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    header.classList.remove("custom-phone-headding");
  });
});

bars.addEventListener("click", openList);

changHeaderSize();

window.addEventListener("resize", changHeaderSize);

other.addEventListener("click", () => {
  if (other.clientWidth >= 100 && other.clientWidth <= 200)
    mega.classList.toggle("active-mega-section");
  else mega.classList.remove("active-mega-section");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    mega.classList.remove("active-mega-section");
  });
});

function openList() {
  header.classList.toggle("custom-phone-headding");
}

function changHeaderSize() {
  header.style.width = `${innerWidth}px`;
}
