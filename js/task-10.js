const color = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');

const createBoxes = amount => {
  const divs = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = color();
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    divs.push(div);
  }
  boxesEl.append(...divs);
};

buttonCreate.addEventListener('click', () => createBoxes(inputEl.value));

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
};

buttonDestroy.addEventListener('click', destroyBoxes);
