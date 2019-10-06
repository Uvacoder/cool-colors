const cardOne = document.querySelector("#card1");
const cardTwo = document.querySelector("#card2");
const cardThree = document.querySelector("#card3");
const cardFour = document.querySelector("#card4");
const cards = document.querySelectorAll(".card-panel");

cards.forEach(card => {
  card.addEventListener("click", e => {
    getColor(e);
  });
});

document.body.onkeypress = e => {
  e.preventDefault();
  if (e.keyCode == 32) {
    let colorsArray = generateCoolColors();
    applyColorsOnCards(colorsArray);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let colorsArray = generateCoolColors();
  applyColorsOnCards(colorsArray);
});

generateCoolColors = () => {
  let colorsArray = [];
  for (let i = 0; i < cards.length; i++) {
    let color = `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
    colorsArray.push(color);
  }
  return colorsArray;
};

applyColorsOnCards = colorsArray => {
  cards.forEach((card, key) => {
    card.style.backgroundColor = colorsArray[key];
  });
};

getColor = e => {
  console.log(e.target.style.backgroundColor);
};
