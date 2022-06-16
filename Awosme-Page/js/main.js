// all intializing variables here
let up = document.getElementById("scroll-to-top");
const allSections = document.querySelectorAll("section");
const moon = document.getElementById("dark");
const sections = document.querySelectorAll("section:not(:first-child)");

//  start scroll to top
// smoth scroll to top
up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// make button appear in next section
window.addEventListener("scroll", () => {
  if (scrollY >= innerHeight) {
    up.style.right = `15px`;
    up.style.bottom = `30px`;
  } else {
    up.style.right = `-60px`;
    up.style.bottom = `-30px`;
  }
});
//  end scroll to top

// start dark mode not completed (need some styles)
moon.addEventListener("click", () => {
  allSections.forEach((sec) => {
    sec.classList.toggle("dark-mode");
  });
});
// end dark mode

// start move effect of sections
window.addEventListener("scroll", handelSectionsUpAnimation);

// make section appears
function handelSectionsUpAnimation() {
  if (innerWidth >= 768) {
    sections.forEach((sec) => moveSection(sec));
  } else {
    sections.forEach((ele) => {
      ele.style.paddingTop = "var(--section-padding)";
      ele.style.opacity = "1";
    });
  }
}
function moveSection(ele) {
  if (scrollY >= ele.offsetTop - innerHeight + 150) {
    ele.style.paddingTop = "var(--section-padding)";
    ele.style.opacity = "1";
  } else {
    ele.style.paddingTop = "300px";
    ele.style.opacity = "0";
  }
}
