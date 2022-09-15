const counterValue = document.querySelector('#value');
let counterValueEl = Number(document.querySelector('#value').textContent);

const btnDecrement = document.querySelector('[data-action="decrement"]');
const decrementHandler = () => {
  counterValueEl -= 1;
  counterValue.textContent = counterValueEl;
};

const btnIncrement = document.querySelector('[data-action="increment"]');
const incrementHandler = () => {
  counterValueEl += 1;
  counterValue.textContent = counterValueEl;
};

btnDecrement.addEventListener('click', decrementHandler);
btnIncrement.addEventListener('click', incrementHandler);
