const fontSizeController = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeController.addEventListener('input', onControllerDrag);

function onControllerDrag(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
};
