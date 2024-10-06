function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorName = document.querySelector("span.color");

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.innerHTML = `${getRandomHexColor()}`;
}