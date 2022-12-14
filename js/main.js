const cardOne = document.querySelector("#card1");
const cardTwo = document.querySelector("#card2");
const cardThree = document.querySelector("#card3");
const cardFour = document.querySelector("#card4");
const cards = document.querySelectorAll(".card-panel");
const colorvalue = document.querySelector("#colorvalue");

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
  const color = e.target.style.backgroundColor;
  colorvalue.style.display = "block";
  colorvalue.value = convertToHex(color);
  colorvalue.select();
  document.execCommand("copy");
  colorvalue.style.display = "none";
  M.toast({ html: "Color Copied Successfully!" });
};

convertToHex = color => {
  let rgbArray = color.substring(4, color.length - 1).split(", ");
  let red = Number(rgbArray[0]).toString(16);
  let green = Number(rgbArray[1]).toString(16);
  let blue = Number(rgbArray[2]).toString(16);
  if (red.length == 1) {
    red = `0${red}`;
  }
  if (green.length == 1) {
    green = `0${green}`;
  }
  if (blue.length == 1) {
    blue = `0${blue}`;
  }
  return `#${red}${green}${blue}`;
};
