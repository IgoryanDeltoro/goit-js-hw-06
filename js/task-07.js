const rangeElWithId = document.getElementById("font-size-control");
const spanElWIthId = document.getElementById("text");
console.log(rangeElWithId);

const hendleEventOfRange = (event) => {
  const getValueFromRange = event.currentTarget.value;
  spanElWIthId.style.fontSize = getValueFromRange + "px";
};

rangeElWithId.addEventListener("input", hendleEventOfRange);
