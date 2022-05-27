const changeColorBtn = document.querySelector('.change-color');
const bodyColorSpan = document.querySelector('span');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  const bodyColor = getRandomHexColor();

  document.body.style.backgroundColor = bodyColor;
  bodyColorSpan.textContent = bodyColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};