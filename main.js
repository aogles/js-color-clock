//clock
const $clockDisplay = document.querySelectorAll(".clock-display"); 
const $clockprogressbar = document.querySelectorAll(".clock-progress-bar");
/*const $clockface = document.querySelectorAll(".clock-face");
const $clock = document.querySelectorAll(".clock"); */

const $inner = select.querySelectorAll('.outer .inner');


function currentTime() {
   const now = new Day();
     
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();

    hh == (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    var timeclock = hh + ":" + mm + ":" + ss + " ";  // this will affect $timeclock, look at name 

   //variable names will target specific elements ex)timeclock
   // query requires $ 



    var timeclock = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();

//clock

//timer bar

function clockprogress() {
    var clockProgressBar = document.querySelector(".clock-progress-bar") ;
    var clockDisplay = document.querySelector(".clock-display") ;
    var startTimer = setInterval(progressBar,10) ;
    function progressBar(){
        if(clockProgressBar.clientWidth < clockDisplay.clientWidth){
            clockProgressBar.style.width = clockProgressBar.clientWidth + 1 + "px";
        }
    else{
        clockProgressBar.style.width = clockDisplay.clientWidth + "px";
        clearInterval(startTimer);
    }
    
    }
}

