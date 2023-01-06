//clock
(function() {
    "use strict";

const $clock = document.querySelector(".clock");
const $clockDisplay = document.querySelector(".clock-display"); //null
const $clockProgressBar = document.querySelector(".clock-progress-bar"); //null +2overloads?
const $clockFace = document.querySelector(".clock-face"); //parent node

 

var date = new Date();
	var date = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
 

let isHovering = false;

$clockDisplay.addEventListener("mouseover", function (){
    isHovering = true;
});

$clockDisplay.addEventListener("mouseout", function() {
    isHovering = false;
});

$clockProgressBar.addEventListener("mouseout", function() {
    isHovering = false;
});

$clockProgressBar.addEventListener("mouseover", function (){
    isHovering = true;
});

setInterval(function () {
    const currentTime = new Date();
    let seconds, minutes, hour; 

//variable names will target specific elements ex)timeclock
   // query requires $ 
   if(isHovering) {

    seconds = ("0" + currentTime.getSeconds().toString(16)).slice(-2);
    minutes = ("0" + currentTime.getMinutes().toString(16)).slice(-2);
    hour = ("0" + currentTime.getHours().toString(16)).slice(-2);
} else {
    seconds = ("0" + currentTime.getSeconds()).slice(-2);
    minutes = ("0" + currentTime.getMinutes()).slice(-2);
    hour = ("0" + currentTime.getHours()).slice(-2);
}

$clockProgressBar.style.width = (seconds/60) * 100 + "%" //progress bar 


$clockProgressBar.getElementsByClassName.width = `${(seconds/60) * 14}rem`;
$clockDisplay.textContent = `${hour}:${minutes}:${seconds}`; 

    }, 1000);

    setInterval(function () {
        var currentTime = new Date()
      var red = Math.floor( (Math.sin(+currentTime/10000)+1) * 155/2); 
      //M.floor rounds down and returns the largest integer less than or equal to a given number.
      //M.sin returns the sine of a number in radians in this case the current time devided
        var blue = Math.floor( (Math.sin(2 * (+currentTime/10000 + 40))+1) * 255/2);
       // var green = Math.floor( (Math.sin(3 * (+currentTime/10000 + 170))+1) * 255/2);
     
        var color = "rgba(" + red + "," + blue + ",255)"; // chnging the 255 changes to brighness of the colors and rate they change, 155 is painful to look at
        $clock.style.background = color; 
     }, 100);

  })(); 

//color


    

 /* (function () { 
    
    var udata = [53];
    if (udata >= 70) - is there a way to set this to something for the time?
    
    {
      document.getElementById("centerbox1").style.backgroundColor = '#99C262';
    }
    else if (udata >= 51 && udata < 70)
    {
      document.getElementById("centerbox1").style.backgroundColor = '#F8D347';
    }  
    else if (udata <=50)  
    {
      document.getElementById("centerbox1").style.backgroundColor = '#FF6C60';
    }
  }) */