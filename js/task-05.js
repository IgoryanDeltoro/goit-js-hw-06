const inputElement = document.querySelector("#name-input");
const titleElement = document.querySelector("#name-output");

const hendlerEvent = (event) => {
  if (!event.currentTarget.value) {
    return (titleElement.textContent = "Anonymous");
  }
  return (titleElement.textContent = event.currentTarget.value);
};

inputElement.addEventListener("input", hendlerEvent);
