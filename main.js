const $timeclock = document.querySelectorAll('.clock-display'); 
const $clockprogress = document.querySelectorAll('.clock-progress-bar');
/*const $timeclock = document.querySelectorAll('.clock-face');
const $timeclock = document.querySelectorAll('.clock'); */
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

