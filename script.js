let seconds = 00;
let tens = 00;
const appendSeconds = document.getElementById("seconds");
const appendTens = document.getElementById("tens");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");
let interval;

function startTimer(){
    tens ++;
    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds ++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds
    }
}

buttonStart.onclick = function(){
    interval = setInterval(startTimer)
}

buttonStop.onclick = function(){
   clearInterval(interval)
}

buttonReset.onclick = function(){
    clearInterval(interval)
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds
}