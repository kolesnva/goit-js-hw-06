const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const divBox = document.querySelector('#boxes');


createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick(event) {
  createBoxes();
};

function onDestroyBtnClick(event) {
  divBox.innerHTML = '';
  inputEl.innerHTML = '';
};

function getRandomHexColor(event) {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
  amount = inputEl.value;

  const boxesArray = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    let box = document.createElement('div');

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    size += 10;

    boxesArray.push(box);
  }

  divBox.append(...boxesArray);
};
