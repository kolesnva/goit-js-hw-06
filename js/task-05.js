const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value != '') {
    textOutput.textContent = event.currentTarget.value;
  } else {
    textOutput.textContent = 'Anonymous';
  }
};