const colors = ['red', 'yellow', 'green', 'blue'];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');
const resetBtn = document.getElementById('reset-btn');

btn.addEventListener('click', function() {
  const randomNumber = getRandomNumber();
  
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}

resetBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#Fbf7f4';
  color.textContent = '#FBF7F4';
})

