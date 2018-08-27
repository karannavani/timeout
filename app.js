
const button = document.querySelector('.button');
const counterText = document.querySelector('.counterText');
let minutes = 20;
let seconds = 0;
const secondsPlaceholder = 0;
let clicked = false;

checkClicked();
counterText.innerHTML = `${minutes}:0${seconds}`;

function checkClicked() {
  if (!clicked) {
    counterText.innerHTML = `${minutes}:0${seconds}`;
  } else {
    counterText.innerHTML = `${minutes}:${seconds}`;
  }
}

button.addEventListener('click', () => {
  clicked = true;
  seconds = 59;
  checkClicked();
  console.log('clicked');
  const secondsInterval = setInterval(() => {
    seconds--;
    counterText.innerHTML = `${minutes}:${seconds}`;
  }, 1000);

  const minutesInterval = setInterval(() => {
    minutes--;
  }, 60000);
  // setTimeout(() => {
  //   alert('Take a break');
  // }, 3000);
});
