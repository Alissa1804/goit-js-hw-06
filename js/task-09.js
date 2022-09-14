const color = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
console.log(color());

const changeColorButton = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const bodyEl = document.querySelector('body');

const handleClick = () => {
  colorText.textContent = color();
  bodyEl.style.backgroundColor = colorText.textContent;
};

changeColorButton.addEventListener('click', handleClick);
