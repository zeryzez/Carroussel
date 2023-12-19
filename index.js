const buttons = document.querySelectorAll(".btn");
const containers = document.querySelectorAll(".container");
const dots = document.querySelectorAll(".dot");
let i = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const nextSlide = e.target.id === "left" ? 1 : -1;
    const slideActive = document.querySelector(".active");
    const dotActive = document.querySelector(".actived");

    i = i - nextSlide;
    if (i < 0) {
      i = containers.length - 1;
    } else if (i > containers.length - 1) {
      i = 0;
    }

    slideActive.classList.remove("active");
    dotActive.classList.remove("actived");

    dots[i].classList.add("actived");
    containers[i].classList.add("active");
  });
});

const buttondark = document.getElementById("button_dark-ligth");

let corp = document.body;

let imgLeft = document.getElementById("left");
let imgRight = document.getElementById("right");

function darkLigthMode() {
  corp.classList.toggle("dark-ligth-mode");
  if (corp.classList.contains("dark-ligth-mode")) {
    imgLeft.src = "./component/flechegauche.png";
    imgRight.src = "./component/flechedroite.png";
  } else {
    imgRight.src = "./component/arrow-forward-outline.svg";
    imgLeft.src = "./component/arrow-back-outline.svg";
  }
}

buttondark.addEventListener("click", () => {
  buttondark.classList.add("fadein-animation");
  setTimeout(() => {
    buttondark.classList.remove("fadein-animation");
  }, 500);
});
