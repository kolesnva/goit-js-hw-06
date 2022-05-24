const counterDecrementBtn = document.querySelector('button[data-action="decrement"]');
const counterIncrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');
let counterValue = parseInt(counter.textContent);

counterDecrementBtn.addEventListener('click', onDecrementBtnClick);
counterIncrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(event) {
  counter.textContent = counterValue -= 1;
};

function onIncrementBtnClick(event) {
  counter.textContent = counterValue += 1;
};