function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElementWithAtribut = document.querySelector('[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divElementWitId = document.querySelector("#boxes");

let getValue;

inputElementWithAtribut.addEventListener("change", (event) => {
  getValue = +event.currentTarget.value;
});

inputElementWithAtribut.addEventListener("blur", () => {
  inputElementWithAtribut.value = "";
});

btnCreate.addEventListener("click", () => createBoxes(getValue));

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let arrOfAmount = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement("div");
    divElement.style.backgroundColor = getRandomHexColor();
    divElement.style.width = size + "px";
    divElement.style.height = size + "px";
    size += 10;
    arrOfAmount.push(divElement);
  }

  divElementWitId.append(...arrOfAmount);
}

function destroyBoxes() {
  const childrenOfBoxe = divElementWitId.children;
  [...childrenOfBoxe].forEach((element) => element.remove());
  getValue;
}
