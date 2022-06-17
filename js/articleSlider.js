const artice = document.getElementById("article");
const articleContaner = document.getElementById("article-contaner");

let pos = 0;
let rightArrow = document.createElement("i");
let leftArrow = document.createElement("i");
styleSliderArrows();
smallSlider();

window.addEventListener("resize", smallSlider);

// Function decleration

function styleSliderArrows() {
  rightArrow.className = "fas fa-long-arrow-alt-right arrow";
  rightArrow.style.right = "100px";
  leftArrow.className = "fas fa-long-arrow-alt-left arrow";
  leftArrow.style.left = "100px";
  leftArrow.addEventListener("click", moveLeft);
  rightArrow.addEventListener("click", moveRight);
}

function moveLeft() {
  pos += 100;
  if (pos > 0) pos = -700;
  articleContaner.style.left = `${pos}%`;
}
function moveRight() {
  pos -= 100;
  if (pos < -700) pos = 0;
  articleContaner.style.left = `${pos}%`;
}

function smallSlider() {
  if (this.innerWidth <= 590) {
    const num = document.querySelectorAll(".article .card").length;
    articleContaner.style.width = `${num}00%`;
    articleContaner.classList.add("article-contaner-slider");
    artice.appendChild(leftArrow);
    artice.appendChild(rightArrow);
  } else {
    leftArrow.remove();
    rightArrow.remove();
    articleContaner.classList.remove("article-contaner-slider");
    articleContaner.style.width = `100%`;
  }
}
