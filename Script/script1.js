const timer = document.querySelector(".timer");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");
const secondsElm = document.querySelector("#seconds");
const minutesElm = document.querySelector("#minutes");
const hundredsElm = document.querySelector("#hundreds");

let interval;
let hundreds = 0;
let seconds = 0;
let minutes = 0;


startBtn.addEventListener("click", (event) => {
  clearInterval(interval);
  interval = setInterval(() => {
    hundreds++;

    if (hundreds <= 9) {
      hundredsElm.innerText = "0" + hundreds;
    } else {
      hundredsElm.innerText = hundreds;
    }

    if (hundreds > 99) {
      hundredsElm.innerText = "00";
      hundreds = 0;
      seconds++;
    }

    if (seconds <= 9) {
      secondsElm.innerText = "0" + seconds;
    } else {
      secondsElm.innerText = seconds;
    }

    if (seconds > 59) {
      secondsElm.innerText = "00";
      seconds = 0;
      minutes++;
    }

    if (minutes <= 9) {
      minutesElm.innerText = "0" + minutes;
    } else {
      minutesElm.innerText = minutes;
    }
  }, 10);
});

stopBtn.addEventListener("click", (event) => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", (event) => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  hundreds = 0;
  minutesElm.innerText = "00";
  secondsElm.innerText = "00";
  hundredsElm.innerText = "00";
});

document.addEventListener('visibilitychange', function() {
  if(document.hidden){
    clearInterval()
  }
  else{

  }
}) ;