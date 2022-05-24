const textInput = document.querySelector('input');

textInput.addEventListener('blur', onTextInputLoseFocus);

function onTextInputLoseFocus(event) {
  const validSymbolsNum = Number(event.currentTarget.dataset.length);
  const enteredSymbolsNum = Number(event.currentTarget.value.length);

  textInput.classList.add('invalid');

  if (enteredSymbolsNum >= validSymbolsNum) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  }
};
