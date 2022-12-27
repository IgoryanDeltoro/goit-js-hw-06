const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listWithId = document.getElementById("ingredients");

const createListOfElements = (option) => {
  return option.map((element) => {
    const list = document.createElement("li");
    list.classList.add("item");
    list.textContent = element;

    return list;
  });
};

const listOfTags = createListOfElements(ingredients);

listWithId.append(...listOfTags);
