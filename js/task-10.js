const color = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
let size = 30;

const createBoxes = amount => {
  let divs = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = color();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.classList.add('box');
    size += 10;
    divs.push(div);
  }
  boxesEl.append(...divs);
};

buttonCreate.addEventListener('click', () => createBoxes(inputEl.value));

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
  inputEl.value = '';
  size = 30;
};

buttonDestroy.addEventListener('click', destroyBoxes);
