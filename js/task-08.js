const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    const message = 'Please fill in all the fields!';
    return alert(message);
  }

  const userData = { email: email.value, password: password.value };
  console.log(userData);

  event.currentTarget.reset();
}
