const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
  counterValue--;
  document.getElementById("value").textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue++;
  document.getElementById("value").textContent = counterValue;
});
