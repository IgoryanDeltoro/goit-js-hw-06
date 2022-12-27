const inputElWithAtribut = document.querySelector('[data-length="6"]');

const hendleEventBlur = (event) => {
  const lengthOfEnterdSymbos = event.currentTarget.value.length;
  const valideLengthFromAtribut = +inputElWithAtribut.dataset.length;

  if (lengthOfEnterdSymbos === valideLengthFromAtribut) {
    return inputElWithAtribut.classList.add("valid");
  }
  return inputElWithAtribut.classList.add("invalid");
};

const removeClass = () => {
  inputElWithAtribut.classList.value = "";
};

inputElWithAtribut.addEventListener("blur", hendleEventBlur);

inputElWithAtribut.addEventListener("focus", removeClass);
