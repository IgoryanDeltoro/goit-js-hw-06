"use strict";

const listWithClass = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${listWithClass.length}`);

listWithClass.forEach((el) => {
  const category = el.querySelector("h2").textContent;
  console.log(`Category: ${category}`);

  const element = el.querySelectorAll("ul li");
  console.log(`Elements: ${element.length}`);
});
