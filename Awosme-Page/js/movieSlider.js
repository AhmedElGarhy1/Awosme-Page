// var declerations

const lis = document.querySelectorAll(".videos .info li");
const MovSlider = document.querySelector(".videos .contaner .imgs");
const images = document.querySelectorAll(".videos .contaner img");
const virtual = document.querySelector(".videos .contaner .virtual");

let MovPos = 0;
let movieSliderHandler;

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", () => {
    let num = i * -100;
    console.log(num);
    moveSlider(num);
  });
}

images.forEach((image) => {
  image.style.width = `${virtual.clientWidth}px`;
});

go();
window.addEventListener("resize", resizeSliderImages);
function resizeSliderImages() {
  images.forEach((image) => {
    image.style.width = `${virtual.clientWidth}px`;
  });
}

function removeColor(num) {
  lis.forEach((li) => {
    li.classList.remove("clicked-slider");
  });
  if (num != 0) {
    num *= -1;
    num /= 100;
  }
  lis[num].classList.add("clicked-slider");
}
function go() {
  movieSliderHandler = setInterval(() => {
    MovPos -= 100;
    if (MovPos < -600) MovPos = 0;
    MovSlider.style.left = `${MovPos}%`;
    removeColor(MovPos);
  }, 3000);
  removeColor(MovPos);
}

function moveSlider(num) {
  MovSlider.style.left = `${num}%`;
  clearInterval(movieSliderHandler);
  MovPos = num;
  go();
}
