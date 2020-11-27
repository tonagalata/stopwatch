let countH = 0, countM = 0, countS = 0, microSec = 0;
let starter = document.getElementById("start")
let stoper = document.getElementById("stop")
let reseter = document.getElementById("reset")
let startInt;

function startStopWatch() {
    if(microSec === 99 && countS !== 60){
        microSec = 0;
        countS++;
    } else {
        microSec++
    }

    if(countS === 60){ 
        countS = 0;
        countM++; 
    } 

    if(countM > 59 ){ 
        countM = 0;
        countH++; 
    } else if (countM > 59 && countM < 0) {
        countM++
    }

    document.getElementById("hours").innerHTML = countH.toString().padStart(2, '0');
    document.getElementById("mins").innerHTML = countM.toString().padStart(2, '0');
    document.getElementById("secs").innerHTML = countS.toString().padStart(2, '0');
    document.getElementById("micro-secs").innerHTML = microSec.toString().padStart(2, '0');
}

starter.addEventListener("click", function(e) {
    e.preventDefault()
    startInt = setInterval(startStopWatch, 10)
});

stoper.addEventListener("click", function(e){
    e.preventDefault()
    clearInterval(startInt)
});

reseter.addEventListener("click", function(e){
    e.preventDefault()
    clearInterval(startInt);
    countH = 0; 
    countM = 0; 
    countS = 0; 
    microSec = 0;

    document.getElementById("hours").innerHTML = "00"
    document.getElementById("mins").innerHTML = "00"
    document.getElementById("secs").innerHTML = "00"
    document.getElementById("micro-secs").innerHTML = "00"
});
