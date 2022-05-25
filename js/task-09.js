const changeColorBtn = document.querySelector('.change-color');
const bodyColorSpan = document.querySelector('.color');
let colorSpan = document.querySelector('span');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  colorSpan.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};