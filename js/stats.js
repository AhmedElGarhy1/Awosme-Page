const stats = document.getElementById("stats");
const statNums = document.querySelectorAll(".stats .box .number");

let isThere = false;
window.addEventListener("scroll", moveStatNumbers);
// start stats section

function moveStatNumbers() {
  if (scrollY >= stats.offsetTop - innerHeight + 150) {
    if (!isThere) {
      statNums.forEach((ele) => rise(ele));
    }
    isThere = true;
  } else {
    statNums.forEach((ele) => {
      ele.textContent = 0;
    });
    isThere = false;
  }
}

function rise(ele) {
  const goal = ele.getAttribute("data-num");
  let n = 0;
  if (ele != statNums[3]) {
    let holder = setInterval(() => {
      ele.textContent++;
      if (Number(ele.textContent) >= goal) {
        clearInterval(holder);
        ele.textContent = goal;
      }
    }, 2000 / goal);
  } else {
    let holder = setInterval(() => {
      n++;
      ele.textContent = `${n}K`;
      if (n >= goal) {
        clearInterval(holder);
      }
    }, 2000 / goal);
  }
}
