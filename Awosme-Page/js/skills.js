const ourSkills = document.getElementById("our-skills");
const progressBars = document.querySelectorAll(".progress span");

function moveSkillBars() {
  if (scrollY >= ourSkills.offsetTop - innerHeight + 150) {
    progressBars.forEach((ele) => {
      let data = ele.getAttribute("data-progress");
      ele.style.width = `${data}%`;
    });
  } else {
    progressBars.forEach((ele) => {
      ele.style.width = `0`;
    });
  }
}

function move() {
  if (innerWidth >= 768) {
    moveSkillBars();
  }
}

window.addEventListener("scroll", move);
