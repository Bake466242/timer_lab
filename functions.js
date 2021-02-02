let intervalID;
let counter = 0;


function startTimer(){
  intervalID =setInterval(callback, 1250);
  function callback() {
    console.log(counter++)
  }
  console.log('ID: ', intervalID)
}

function stopTimer(){
  console.log('stop', intervalID)
clearInterval(intervalID)
}

function resetTimer(){
  clearInterval(intervalID);
  counter = 0;
}