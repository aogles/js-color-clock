//clock
const $clockDisplay = document.querySelector(".clock-display"); //null
const $clockprogressbar = document.querySelector(".clock-progress-bar"); //null +2overloads?
const $clockface = document.querySelector(".clock-face"); //parent node
const $clock = document.querySelector(".clock"); 

const $inner = select.querySelectorAll(".outer .inner");


function currentTime() {
   const now = new Day();
     
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();

    hh == (hh < 10) ? "0" + hh : hh;
    mm == (mm < 10) ? "0" + mm : mm;
    ss == (ss < 10) ? "0" + ss : ss;

    var clockDisplay = hh + ":" + mm + ":" + ss + " ";  // declared but never read 

   //variable names will target specific elements ex)timeclock
   // query requires $ 



    var clockDisplay = setTimeout(function(){ currentTime() }, 1000); //undefined,void
}

currentTime(); //reads as void

//clock
/*  For the clock i was attempting to use the querySelector to link this JS to HTML but was unsuccessful.the 
the clock display has not changed and gives an undefined ue to the value never being read, the function for currentTime r
reads as 'void'. I also am having a hard time understanding how to use (inner/outer HTML) */

//timer bar
//why does document.getElementByClass() not work for linking to html info?

function clockprogress() {
    var clockProgressBar = document.querySelector(".clock-progress-bar") ;
    var clockFace = document.querySelector(".clock-face") ;
    var startTimer = setInterval(progressBar,10) ;
    function progressBar(){
        if(clockFace.clientWidth < clockProgressBar.clientWidth){
            clockProgressBar.style.width = clockProgressBar.clientWidth + 1 + "px";
        }
    else{
        clockProgressBar.style.width = clockDisplay.clientWidth + "px";
        clearInterval(startTimer);
    }
    
    }
}
//time bar
/* For the progres bar i was attempting to set the progress bar to change width every time the width 
of the clock face is less than the progress bar, which is constant as the clock face has no width, I
attempted to create a function, however i have not successfully gotten my JS to link with the HTML or CSS */

//color change

var i=0;
var col = new Array("ff99cc","ff3399","b30059","800040","33001a");
function change()
{
    document.body.style.backgroundColor=col[i];
    i++
    if(i>col.length)
{
    i=0;
  }
  
  window.setTimeout("change()",1000);
}
 window.onload=change();

 /* var generator = function() {
    newColor = "#" +
    (Math.random()*0xffffff<<0).toString(16)
 }   ask more about this method */