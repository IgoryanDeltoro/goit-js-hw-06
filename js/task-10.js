function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElementWithAtribut = document.querySelector('[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divElementWitId = document.querySelector("#boxes");

let getValue = 0;

inputElementWithAtribut.addEventListener("change", (event) => {
  getValue = +event.currentTarget.value;
});

inputElementWithAtribut.addEventListener("blur", () => {
  inputElementWithAtribut.value = "";
});

btnCreate.addEventListener("click", () => {
  const createdBoxes = createBoxes(getValue);
  divElementWitId.append(...createdBoxes);
});

btnDestroy.addEventListener("click", () => destroyBoxes());

function createBoxes(amount) {
  let arrOfAmount = [];
  for (let i = 0; i < amount; i++) arrOfAmount.push(i);

  let size = 30;

  return arrOfAmount.map(() => {
    const divElement = document.createElement("div");
    divElement.style.backgroundColor = getRandomHexColor();
    divElement.style.width = size + "px";
    divElement.style.height = size + "px";
    size += 10;
    return divElement;
  });
}

function destroyBoxes() {
  const childrenOfBoxe = divElementWitId.children;
  [...childrenOfBoxe].forEach((element) => element.remove());
  getValue = 0;
}
