function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createMarkup);
destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
  sizes = 30;
}

function createMarkup() {
  const amount = Number(input.value)
    if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
  input.value = "";
}

function createBoxes(amount) {
  boxes.innerHTML = "";
  const boxesCol = [];
  let sizes = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesCol.push(box);
    sizes += 10;
  }
  boxes.append(...boxesCol);
}
