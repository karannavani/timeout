
const button = document.querySelector('.button');
const counterText = document.querySelector('.counterText');
let minutes = 20;
let seconds = 0;
let timerRunning = false;

counterText.innerHTML = `${minutes}:0${seconds}`;

button.addEventListener('click', () => {
  timerRunning = true;
  minutes--;
  seconds = 59;
  console.log('clicked');
  const secondsInterval = setInterval(() => {
    checkSeconds();
    seconds--;
    // counterText.innerHTML = `${minutes}:${seconds}`;
  }, 1000);

  // const minutesInterval = setInterval(() => {
  //   minutes--;
  // }, 60000);
  // setTimeout(() => {
  //   alert('Take a break');
  // }, 3000);
});

function checkSeconds() {
  if (seconds === 0 && timerRunning) {
    counterText.innerHTML = `${minutes}:00`;
    seconds = 60;
    minutes--;
  } else if(seconds < 10) {
    counterText.innerHTML = `${minutes}:0${seconds}`;
  } else {
    counterText.innerHTML = `${minutes}:${seconds}`;
  }
}
