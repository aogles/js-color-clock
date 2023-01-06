//clock
(function() {
    "use strict";

const $clockDisplay = document.querySelector(".clock-display"); //null
const $clockProgressBar = document.querySelector(".clock-progress-bar"); //null +2overloads?
//const $clockface = document.querySelector(".clock-face"); //parent node
const $clock = document.querySelector(".clock"); 

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

$clockProgressBar.style.width = (seconds/60) * 100 + "%"


$clockProgressBar.getElementsByClassName.width = `${(seconds/60) * 14}rem`;
$clockDisplay.textContent = `${hour}:${minutes}:${seconds}`; 

    }, 1000);

  })(); 

//clock
/*  For the clock i was attempting to use the querySelector to link this JS to HTML but was unsuccessful.the 
the clock display has not changed and gives an undefined ue to the value never being read, the function for currentTime r
reads as 'void'. I also am having a hard time understanding how to use (inner/outer HTML) */ 

    

 /* (function () { 
    var udata = [53];
    if (udata >= 70) {
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