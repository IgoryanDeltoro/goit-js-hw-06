function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElementWithTag = document.querySelector("body");
const btnElementWithClass = document.querySelector(".change-color");
const spanElement = bodyElementWithTag.querySelector("span.color");

btnElementWithClass.addEventListener("click", hendleEventColor);

function hendleEventColor() {
  const getRandomColor = getRandomHexColor();
  bodyElementWithTag.style.backgroundColor = getRandomColor;
  spanElement.textContent = getRandomColor;
}
