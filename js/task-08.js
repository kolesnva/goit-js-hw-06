const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();

  const loginInfo = {};
  const emailInput = loginForm.elements[0].value;
  const passwordInput = loginForm.elements[1].value;
  
  if (emailInput === ''|| passwordInput === '') {
    alert('Fill all required fields');
  }

  loginInfo.email = emailInput;
  loginInfo.password = passwordInput;

  console.log(loginInfo);

  loginForm.reset();
}