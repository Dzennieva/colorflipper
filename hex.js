const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const resetBtn = document.getElementById('reset-btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let hexColor = '#';
  // let randomNumber =;

  // console.log(randomNumber())
  for (let i = 0; i < 6; i++) {
    hexColor += hexValues[getRandomNumbers()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor
})

const getRandomNumbers = () => {
  return Math.floor(Math.random() * hexValues.length);
}

resetBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#FBF7F4';
  color.textContent = '#FBF7F4';
})